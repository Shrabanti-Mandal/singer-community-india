import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "./Singer.css";

const Singer = (props) => {
  const { name, img, totalIncome, profession, BestSong, album } = props.singer;

  const icon = <FontAwesomeIcon icon={faMusic} />;

  return (
    <div className="singer-div">
      <img className="img" src={img} alt="" />
      <h2>Name: {name}</h2>
      <h5>Total Income: {totalIncome}</h5>

      <h5>Profession: {profession}</h5>
      <h5>No of album: {album}</h5>
      <h5>Nomitated for: {BestSong}</h5>
      <button
        onClick={() => props.handleVoteForWinning(props.singer)}
        className="vote-btn"
      >
        {icon} vote for winning
      </button>
    </div>
  );
};

export default Singer;
