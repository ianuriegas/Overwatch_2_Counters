import React, { useState } from "react";
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
  const [generated, setGenerated] = useState(false);

  const handleDamageHeroOneChange = (value) => {
    setDamageHeroOne(value);
    setDamageHeroTwoOptions(
      hero_info.Damage.filter((hero) => hero.name !== value)
    );
  };

  const handleSupportHeroOneChange = (value) => {
    setSupportHeroOne(value);
    setSupportHeroTwoOptions(
      hero_info.Support.filter((hero) => hero.name !== value)
    );
  };

  const [damageHeroTwoOptions, setDamageHeroTwoOptions] = useState(
    hero_info.Damage
  );
  const [supportHeroTwoOptions, setSupportHeroTwoOptions] = useState(
    hero_info.Support
  );

  const handleGenerateClick = () => {
    if (
      !tankHero ||
      !damageHeroOne ||
      !damageHeroTwo ||
      !supportHeroOne ||
      !supportHeroTwo
    ) {
      // Display an error message or prevent further action
      alert("Please select a hero for each role.");
    } else {
      // Proceed with generating composition
      console.log("Generating composition...");
      setGenerated(true);
    }
  };

  return (
    <div style={{ paddingTop: "2.5%" }}>
      <Card
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          padding: "20px",
          width: "80%",
          height: "88%",
          backgroundColor: "rgba(130, 130, 130, 0.9)",
          color: "white",
          paddingBottom: "10%",
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
            onChange={handleDamageHeroOneChange}
            options={hero_info.Damage}
          />
          <HeroSelect
            label="Damage"
            value={damageHeroTwo}
            onChange={(value) => setDamageHeroTwo(value)}
            options={damageHeroTwoOptions}
          />
          <HeroSelect
            label="Support"
            value={supportHeroOne}
            onChange={handleSupportHeroOneChange}
            options={hero_info.Support}
          />
          <HeroSelect
            label="Support"
            value={supportHeroTwo}
            onChange={(value) => setSupportHeroTwo(value)}
            options={supportHeroTwoOptions}
          />
          <div>
            <Button
              style={{
                color: "limegreen",
                backgroundColor: "transparent",
                border: "2px solid limegreen",
                transition: "background-color 0.3s ease",
                width: "150%",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "limegreen";
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "limegreen";
              }}
              onClick={handleGenerateClick}
            >
              Generate
            </Button>
          </div>
          {generated ? (
            <div style={{ paddingBottom: "10px" }}>
              <h3>hi</h3>
            </div>
          ) : (
            <></>
          )}
        </Stack>
      </Card>
    </div>
  );
}

export default Home;
