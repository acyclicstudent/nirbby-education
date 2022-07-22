import { ChimeSDKMeetings } from 'aws-sdk';

const chime = new ChimeSDKMeetings({
    region: process.env.CHIME_CONTROL_REGION
});

export const retrieveMeeting = async (meetingId:string) => {
    const meeting = await chime.getMeeting({
        MeetingId: meetingId
    }).promise();

    if (!meeting.Meeting) return null;

    return {
        meetingId: meeting.Meeting.ExternalMeetingId as string,
        serviceMeetingId: meeting.Meeting.MeetingId as string,
        connectionData: {
            MediaPlacement: meeting.Meeting.MediaPlacement as object,
            MediaRegion: meeting.Meeting.MediaRegion as string
        }
    }
}