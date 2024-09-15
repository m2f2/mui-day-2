import {
  Box,
  ImageList,
  ImageListItem,
  ListSubheader,
  Typography,
  useMediaQuery,
} from "@mui/material";

export default function Products() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");

  const cols = isSmallScreen ? 1 : isMediumScreen ? 2 : 4;
  
  return (
    <Box margin="30px">
      <ImageListItem key="Subheader">
        <ListSubheader
          component="div"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          SHOP BY CATEGORY
        </ListSubheader>
      </ImageListItem>

      <ImageList rowHeight={400} cols={cols} gap={20}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.id}
            sx={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "15px",
              "&:hover": {
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
                overflow: "hidden",
              }}
            >
              <img
                src={item.url}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Box>

            <Typography variant="subtitle1" sx={{ mt: 2, textAlign: "center" }}>
              {item.name}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    id: 1,
    name: "Ready to Ship Upholstery",
    url: "/curvedSofa.webp",
  },

  {
    id: 2,
    name: "Dining",
    url: "/Dining.jpeg",
  },

  {
    id: 3,
    name: "Storage Beds",
    url: "/Bed.jpeg",
  },

  {
    id: 4,
    name: "Lighting",
    url: "/Lighting.webp",
  },

  {
    id: 5,
    name: "Accent Tables",
    url: "/table.jpeg",
  },

  {
    id: 6,
    name: "Rugs",
    url: "/rugs.jpg",
  },

  {
    id: 7,
    name: "Bar & Counter Stools",
    url: "/stools.jpg",
  },

  {
    id: 8,
    name: "Accent Stools",
    url: "/Accent+Stools.webp",
  },

  {
    id: 9,
    name: "Accessories",
    url: "/accessories.jpg",
  },

  {
    id: 10,
    name: "Accent Chairs",
    url: "/AccentChairs .jpeg",
  },

  {
    id: 11,
    name: "Outdoor",
    url: "/outdoor.avif",
  },

  {
    id: 12,
    name: "Media & Storage",
    url: "/curvedSofa.jpeg",
  },
];
