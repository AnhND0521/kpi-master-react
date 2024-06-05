import Wrapper from "../components/Wrapper";
import Roulette from "../components/roulette/Roulette";

const RouletteGame = () => {
  const data = [
    {
      text: "10🪙",
    },
    {
      text: "500🪙",
    },
    {
      text: "25🪙",
    },
    {
      text: "50🪙",
    },
    {
      text: "100🪙",
    },
    {
      text: "1🪙",
    },
    {
      text: "5🪙",
    },
    {
      text: "15🪙",
    },
    {
      text: "20🪙",
    },
    {
      text: "1000🪙",
    },
    {
      text: "2🪙",
    },
    {
      text: "0🪙",
    },
  ];

  return (
    <Wrapper tab={0}>
      <div className="w-full flex gap-10 justify-start items-start">
        <Roulette data={data} />
      </div>
    </Wrapper>
  );
};

export default RouletteGame;
