import { Stack, Typography } from "@mui/material";
import React from "react";
import heroInfo from "../Assetts/hero_info.json";

function GenerateTeam({
  tankHero,
  damageHeroOne,
  damageHeroTwo,
  supportHeroOne,
  supportHeroTwo,
  setGenerated,
}) {
  // Check if any hero names are empty or equal to each other
  if (
    !tankHero ||
    !damageHeroOne ||
    !damageHeroTwo ||
    !supportHeroOne ||
    !supportHeroTwo ||
    tankHero === damageHeroOne ||
    tankHero === damageHeroTwo ||
    tankHero === supportHeroOne ||
    tankHero === supportHeroTwo ||
    damageHeroOne === damageHeroTwo ||
    damageHeroOne === supportHeroOne ||
    damageHeroOne === supportHeroTwo ||
    damageHeroTwo === supportHeroOne ||
    damageHeroTwo === supportHeroTwo ||
    supportHeroOne === supportHeroTwo
  ) {
    setGenerated(false);
    return null;
  }

  // Find the tank hero and display its counters
  const tank = heroInfo.Tank.find((hero) => hero.name === tankHero);
  const tankCounters = tank.counters;

  // Find the first damage hero and display its counters
  const damageOne = heroInfo.Damage.find((hero) => hero.name === damageHeroOne);
  const damageOneCounters = damageOne.counters;

  // Find the second damage hero and display its counters
  const damageTwo = heroInfo.Damage.find((hero) => hero.name === damageHeroTwo);
  const damageTwoCounters = damageTwo.counters;

  // Find the first support hero and display its counters
  const supportOne = heroInfo.Support.find(
    (hero) => hero.name === supportHeroOne
  );
  const supportOneCounters = supportOne.counters;

  // Find the second support hero and display its counters
  const supportTwo = heroInfo.Support.find(
    (hero) => hero.name === supportHeroTwo
  );
  const supportTwoCounters = supportTwo.counters;

  const allCounters = [
    ...tankCounters,
    ...damageOneCounters,
    ...damageTwoCounters,
    ...supportOneCounters,
    ...supportTwoCounters,
  ];

  const counterCounts = allCounters.reduce((counts, counter) => {
    if (counter in counts) {
      counts[counter]++;
    } else {
      counts[counter] = 1;
    }
    return counts;
  }, {});

  const sortedCounterCounts = Object.entries(counterCounts)
    .sort((a, b) => b[1] - a[1])
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

  // Function to get the role of a hero
  const getHeroRole = (heroName) => {
    for (const category of Object.keys(heroInfo)) {
      const heroes = heroInfo[category];
      for (const hero of heroes) {
        if (hero.name === heroName) {
          return category;
        }
      }
    }
    return "";
  };

  // Function to get the image URL of a hero
  const getHeroImage = (heroName) => {
    for (const category of Object.keys(heroInfo)) {
      const heroes = heroInfo[category];
      for (const hero of heroes) {
        if (hero.name === heroName) {
          return hero.image;
        }
      }
    }
    return "";
  };

  return (
    <div>
      <h2 style={{ color: "white" }}>Optimized Counters:</h2>

      {Object.entries(sortedCounterCounts)
        .filter(([counter, count]) => {
          const role = getHeroRole(counter);
          return role === "Tank";
        })
        .slice(0, 1)
        .map(([counter, count]) => (
          <div style={{ marginBottom: "20px" }}>
            <Stack direction="row" spacing={2} align="left">
              <img width="80px" src={getHeroImage(counter)} alt={counter} />
              <Stack>
                <Typography variant="h5">{counter}</Typography>
                <Typography>{getHeroRole(counter)}</Typography>
              </Stack>
            </Stack>
          </div>
        ))}

      {Object.entries(sortedCounterCounts)
        .filter(([counter, count]) => {
          const role = getHeroRole(counter);
          return role === "Damage";
        })
        .slice(0, 2)
        .map(([counter, count]) => (
          <div style={{ marginBottom: "20px" }}>
            <Stack direction="row" spacing={2} align="left">
              <img width="80px" src={getHeroImage(counter)} alt={counter} />
              <Stack>
                <Typography variant="h5">{counter}</Typography>
                <Typography>{getHeroRole(counter)}</Typography>
              </Stack>
            </Stack>
          </div>
        ))}

      {Object.entries(sortedCounterCounts)
        .filter(([counter, count]) => {
          const role = getHeroRole(counter);
          return role === "Support";
        })
        .slice(0, 2)
        .map(([counter, count]) => (
          <div style={{ marginBottom: "20px" }}>
            <Stack direction="row" spacing={2} align="left">
              <img width="80px" src={getHeroImage(counter)} alt={counter} />
              <Stack>
                <Typography variant="h5">{counter}</Typography>
                <Typography>{getHeroRole(counter)}</Typography>
              </Stack>
            </Stack>
          </div>
        ))}
    </div>
  );
}

export default GenerateTeam;
