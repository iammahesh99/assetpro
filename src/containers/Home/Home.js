import { Box, Stack, Typography } from "@mui/material";
import Landingpage from "./Landingpage";
import Newsroom from "./Newsroom";
import LargeHeading from "../../components/Heading";
import { CommonWrapper } from "../CommonStyle";
import CustomCarousel from "../../components/CustomCarousel";
import { images } from "../../api/mockdata/HomeImage";

const Home = () => {
  return (
    <Box>
      <CustomCarousel images={images} height="350px" />
      <Box
        sx={{
          position: "absolute",
          top: "17%",
          right: "16%",
          width: "20%",
        }}
      >
        <Typography variant="h3" color="secondary">
          This is heading
        </Typography>
        <Typography variant="navbarItem" color="secondary">
          This is content part to show the relavent data kksdhjkdjkhs jkbasjbj
          hashj ashjbjb hjashj
        </Typography>
      </Box>
      <CommonWrapper>
        <Box
          sx={{
            padding: "0% 0% 1% 0%",
          }}
        >
          <LargeHeading
            variant="h7"
            label="Lorem Ipsum Content to print simple text"
          />
          <Typography variant="body1" sx={{ lineHeight: "2em" }}>
            "Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos,
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Landingpage />
          <Newsroom />
        </Stack>
      </CommonWrapper>
    </Box>
  );
};

export default Home;
