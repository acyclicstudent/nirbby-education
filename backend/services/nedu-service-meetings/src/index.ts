import { ChimeSDKMeetings } from 'aws-sdk';

export const handler = async (event: any) => {
    return (operations as any)[event.info.parentTypeName][event.info.fieldName](
        event.arguments,
        event.identity
    );
}

// Crear reunion
const chime = new ChimeSDKMeetings({
    region: process.env.CHIME_CONTROL_REGION
});

async function createMeeting(meetingId: string) {
    const meeting = await this.chime.createMeeting({
        ClientRequestToken: uuid(),
        ExternalMeetingId: meetingId,
        MediaRegion: process.env.AWS_REGION as string
    }).promise()
    
    if (!meeting.Meeting) throw Error('Could not create meeting');

    return {
        meetingId: meeting.Meeting.ExternalMeetingId as string,
        serviceMeetingId: meeting.Meeting.MeetingId as string,
        connectionData: {
            MediaPlacement: meeting.Meeting.MediaPlacement as object,
            MediaRegion: meeting.Meeting.MediaRegion as string
        }
    }
}

public async retrieveMeeting(meetingId: string) {
    try {
        const meeting = await this.chime.getMeeting({
            MeetingId: meetingId
        }).promise()
        
        if (!meeting.Meeting) return null;

        return {
            meetingId: meeting.Meeting.ExternalMeetingId as string,
            serviceMeetingId: meeting.Meeting.MeetingId as string,
            connectionData: {
                MediaPlacement: meeting.Meeting.MediaPlacement as object,
                MediaRegion: meeting.Meeting.MediaRegion as string
            }
        }
    } catch (err) {
        // Si es un not found.
        if ((err as AWSError).statusCode === 404)
        return null;
        console.error(err);
        throw new ExternalServiceException((err as Error).message);
    }
}

// joinMeeting
public async createAttendee(params: CreateAttendeeParams) {
    try {
        const attendee = await this.chime.createAttendee({
            MeetingId: params.serviceMeetingId,
            ExternalUserId: params.userId
        }).promise()
        
        if (!attendee.Attendee) throw Error('Could not create attendee');
        
        return {
            attendeeId: attendee.Attendee.AttendeeId as string,
            userId: attendee.Attendee.ExternalUserId as string,
            connectionToken: attendee.Attendee.JoinToken as string
        }
    } catch (err) {
        console.error(err);
        throw new ExternalServiceException((err as Error).message);
    }
}

const operations = {
    Mutation: {
    },
    Query: {
    }
}