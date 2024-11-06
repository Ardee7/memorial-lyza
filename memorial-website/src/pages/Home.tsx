import { Avatar, Box, Container, Typography } from "@mui/material";
import { YoutubeVideo } from "../components/YoutubeVideo";
import { SwiperCarousel } from "../components/SwiperCarousel";
import { Box1 } from "../components/Box";
import { Message } from "../components/Message";
import { LifeStory } from "../components/LifeStory";
import { messages } from "../constants/messages";

export const Home = () => {
  return (
    <Container
      style={{
        flex: 1,
      }}
    >
      {/* Hero picture of lyza */}
      <Box sx={{ justifyItems: "center", margin: 2, padding: 4 }}>
        <Avatar
          alt="Lyza Kate Villanueva Lachica"
          src={"lyza-pic.jpg"}
          sx={{
            height: "280px",
            width: "180px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <Typography
          sx={{
            mt: 2,
            flexGrow: 1,
            fontFamily: "Merriweather, serif",
            color: "#7d2e41",
            textAlign: "center",
          }}
        >
          Lyza Kate Villanueva Lachica
        </Typography>
        <Typography
          sx={{
            flexGrow: 1,
            fontFamily: "Merriweather, serif",
            color: "#7d2e41",
            textAlign: "center",
          }}
        >
          20 years old
        </Typography>
      </Box>
      {/* Hero picture of lyza */}
      {/* Life story */}
      <Box1>
        <LifeStory />
      </Box1>
      {/* Unfinished books */}
      <Box1>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Echoes of Her Imagination
        </Typography>
        <iframe src="the-reminisce.pdf" width="100%" height="600px">
          Your browser does not support iframes.
        </iframe>
      </Box1>
      {/* Videos */}
      <Box1>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Memories
        </Typography>
        <SwiperCarousel
          contentList={[
            <YoutubeVideo videoId="6TKaNhdx_-I" autoPlay={0} />,
            <YoutubeVideo videoId="-1A2ZJ0neMg" autoPlay={0} />,
            <YoutubeVideo videoId="QkFD_IzYfIE" autoPlay={0} />,
          ]}
        />
      </Box1>
      {/* Messages */}
      <Box1>
        <Typography variant="h4" sx={{ mb: 3 }}>
          To Our Beloved Lyza
        </Typography>
      </Box1>
      <Box1>
        <SwiperCarousel
          contentList={messages.map(({ message, senderName }) => (
            <Message message={message} senderName={senderName} />
          ))}
        />
      </Box1>
    </Container>
  );
};
