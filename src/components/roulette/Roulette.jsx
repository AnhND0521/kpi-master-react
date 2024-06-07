import { Button, Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import Wrapper from "../Wrapper";
import MessageDialog from "../MessageDialog";
import coin from "../../assets/coin.png";
import BuySpinsDialog from "./BuySpinsDialog";

const Roulette = ({ data, setTotalCoins }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(0);
  const [prize, setPrize] = useState(0);
  const [rouletteData, setRouletteData] = useState(data);
  const [openResultDialog, setOpenResultDialog] = useState(false);
  const [openBuySpinsDialog, setOpenBuySpinsDialog] = useState(false);
  const [coins, setCoins] = useState(0);
  const [turns, setTurns] = useState(2);

  const handleSpinClick = () => {
    if (turns === 0) {
      setOpenBuySpinsDialog(true);
      return;
    }

    let newPrizeIndex = Math.floor(Math.random() * data.length);
    let newPrize = +data[newPrizeIndex].text.slice(
      0,
      data[newPrizeIndex].text.indexOf("🪙")
    );
    console.log(
      data[newPrizeIndex].text.slice(0, data[newPrizeIndex].text.indexOf("🪙"))
    );
    while (newPrize >= 50) {
      let rate = Math.random();
      if (rate <= 0.05) break;
      newPrizeIndex = Math.floor(Math.random() * data.length);
      newPrize = +data[newPrizeIndex].text.slice(
        0,
        data[newPrizeIndex].text.indexOf("🪙")
      );
    }
    setPrizeIndex(newPrizeIndex);
    setPrize(newPrize);
    setMustSpin(true);
    setTurns((cur) => cur - 1);
  };

  useEffect(() => {
    const addShortString = data.map((item) => {
      return {
        completeOption: item.text,
        option:
          item.text.length >= 30
            ? item.text.substring(0, 30).trimEnd() + "..."
            : item.text,
      };
    });
    setRouletteData(addShortString);
  }, [data]);

  return (
    <div align="center" className="w-full flex flex-col gap-5 items-center">
      <Typography className="text-xl font-medium">
        Bạn đã nhận được: {coins}🪙
      </Typography>
      <Wheel
        mustStartSpinning={mustSpin}
        spinDuration={[0.2]}
        prizeNumber={prizeIndex}
        data={rouletteData}
        outerBorderColor={["#ccc"]}
        outerBorderWidth={[9]}
        innerBorderColor={["#f2f2f2"]}
        radiusLineColor={["tranparent"]}
        radiusLineWidth={[1]}
        textColors={["#f5f5f5"]}
        textDistance={55}
        fontSize={[25]}
        backgroundColors={[
          "#3f297e",
          "#175fa9",
          "#169ed8",
          "#239b63",
          "#64b031",
          "#B37C00",
          "#f7a416",
          "#e6471d",
          "#dc0936",
          "#e5177b",
          "#be1180",
          "#871f7f",
        ]}
        onStopSpinning={() => {
          setMustSpin(false);
          setOpenResultDialog(true);
        }}
      />
      <Button className="bg-purple w-48 text-base" onClick={handleSpinClick} disabled={mustSpin}>
        Quay
      </Button>
      <Typography className="text-base font-medium">
        Bạn còn {turns} lượt quay
      </Typography>
      <MessageDialog
        message={`Bạn đã nhận được +${data[prizeIndex].text}!`}
        open={openResultDialog}
        handleOpen={setOpenResultDialog}
        handleConfirm={() => {
          setOpenResultDialog(false);
          setCoins((cur) => cur + prize);
          setTotalCoins(cur => cur + prize);
        }}
      />
      <BuySpinsDialog
        open={openBuySpinsDialog}
        handleOpen={setOpenBuySpinsDialog}
        handleCancel={() => setOpenBuySpinsDialog(false)}
        handleBuy={(quantity) => {
          setTurns(turns + quantity);
          setOpenBuySpinsDialog(false);
        }}
      />
    </div>
  );
};

export default Roulette;
