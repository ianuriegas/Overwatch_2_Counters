import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import hero_info from "../Assetts/hero_info.json";
import HeroSelect from "../Components/HeroSelect";
import "../Assetts/home.css";

function Home() {
  const [tankHero, setTankHero] = useState("");
  const [damageHeroOne, setDamageHeroOne] = useState("");
  const [damageHeroTwo, setDamageHeroTwo] = useState("");
  const [supportHeroOne, setSupportHeroOne] = useState("");
  const [supportHeroTwo, setSupportHeroTwo] = useState("");

  return (
    <div style={{paddingTop: "2.5%"}}>
      <Card
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          padding: "20px",
          width: "80%",
          height: "88%",
          backgroundColor: "rgba(130, 130, 130, 0.9)",
        // backgroundColor: "grey",
          color: "white",
        }}
      >
        <Stack spacing={3} alignItems="center" style={{}}>
          <h2 style={{}}>Enemy Composition</h2>
          <HeroSelect
            label="Tank"
            value={tankHero}
            onChange={setTankHero}
            options={hero_info.Tank}
          />
          <HeroSelect
            label="Damage"
            value={damageHeroOne}
            onChange={setDamageHeroOne}
            options={hero_info.Damage}
          />
          <HeroSelect
            label="Damage"
            value={damageHeroTwo}
            onChange={setDamageHeroTwo}
            options={hero_info.Damage}
          />
          <HeroSelect
            label="Support"
            value={supportHeroOne}
            onChange={setSupportHeroOne}
            options={hero_info.Support}
          />
          <HeroSelect
            label="Support"
            value={supportHeroTwo}
            onChange={setSupportHeroTwo}
            options={hero_info.Support}
          />
          <div style={{ paddingTop: "2%"}}>
            <Button
              style={{
                color: "limegreen",
                backgroundColor: "transparent",
                border: "2px solid limegreen",
                transition: "background-color 0.3s ease",
                width: "150%"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "limegreen";
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "limegreen";
              }}
            >
              Generate
            </Button>
          </div>
        </Stack>
      </Card>
    </div>
  );
}

export default Home;
