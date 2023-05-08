import { Card, MenuItem, Select, Stack, Typography } from "@mui/material";

function HeroSelect({ label, value, onChange, options }) {
  return (
    <Stack direction={"row"} style={{height: "70px"}}>
      <Typography
        style={{
        //   backgroundColor: "blue",
          width: "100px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {label}
      </Typography>

      <Select
        style={{
          width: "400px",
          color: "white",
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((hero) => (
          <MenuItem key={hero.name} value={hero.name}>
            <Stack
              direction={"row"}
              spacing={2}
              style={{
                alignItems: "center",
              }}
            >
              <img width="40px" src={hero.image} alt={hero.name} />
              <Typography>{hero.name}</Typography>
            </Stack>
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}

export default HeroSelect;
