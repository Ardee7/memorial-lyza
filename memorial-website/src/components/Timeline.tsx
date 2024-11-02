import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

const TimeLineData = ({ time, content }: { time: string; content: string }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent> {content}</TimelineContent>
    </TimelineItem>
  );
};

export const LifeDetails = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimeLineData content="Sample content." time="09:00 am" />
      <TimeLineData content="Sample content." time="09:00 am" />
      <TimeLineData content="Sample content." time="09:00 am" />
      <TimeLineData content="Sample content." time="09:00 am" />
      <TimeLineData content="Sample content." time="09:00 am" />
      <TimeLineData content="Sample content." time="09:00 am" />
      <TimeLineData content="Sample content." time="09:00 am" />
      <TimeLineData content="Sample content." time="09:00 am" />
      <TimeLineData content="Sample content." time="09:00 am" />
      <TimeLineData content="Sample content." time="09:00 am" />
      <TimeLineData content="Sample content." time="09:00 am" />
      <TimeLineData content="Sample content." time="09:00 am" />
    </Timeline>
  );
};
