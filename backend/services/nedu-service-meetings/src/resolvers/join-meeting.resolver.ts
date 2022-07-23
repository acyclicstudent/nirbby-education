import { ChimeSDKMeetings } from 'aws-sdk';
import { ResourceNotFoundException } from '../domain/exceptions/resource-not-found.exception';

const chime = new ChimeSDKMeetings

export const joinMeeting = async (params: any) => {
    const attendee = await chime.createAttendee({
        MeetingId: params.serviceMeetingId,
        ExternalUserId: params.userId
    }).promise();

    if (!attendee.Attendee) throw new ResourceNotFoundException('No se pudo unir a la reunion');
        
    return {
        attendeeId: attendee.Attendee.AttendeeId as string,
        userId: attendee.Attendee.ExternalUserId as string,
        connectionToken: attendee.Attendee.JoinToken as string
    }
}