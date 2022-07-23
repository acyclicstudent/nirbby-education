import { ChimeSDKMeetings } from 'aws-sdk';
import { randomUUID } from 'crypto';
import { ResourceNotFoundException } from '../domain/exceptions/resource-not-found.exception';

const chime = new ChimeSDKMeetings({
    region: process.env.CHIME_CONTROL_REGION
});

export const createMeeting = async (meetingId: string) => {
    const uuid = randomUUID();
    
    const meeting = await chime.createMeeting({
        ClientRequestToken: randomUUID(),
        ExternalMeetingId: uuid,
        MediaRegion: process.env.AWS_REGION as string
    }).promise();
    
    if (!meeting.Meeting) throw new ResourceNotFoundException('No se pudo crear la reunion.');

    return {
        meetingId: meeting.Meeting.ExternalMeetingId as string,
        serviceMeetingId: meeting.Meeting.MeetingId as string,
        connectionData: {
            MediaPlacement: meeting.Meeting.MediaPlacement as object,
            MediaRegion: meeting.Meeting.MediaRegion as string
        }
    }
}