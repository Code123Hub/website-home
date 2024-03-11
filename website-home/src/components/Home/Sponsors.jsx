

import React, { useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronCircleRight, faChevronCircleLeft} from "@fortawesome/free-solid-svg-icons";
import { sponsorCompany } from "../../data/SponsorCompany.jsx";
import './Sponsor.css';

function Sponsors() {
  const cardsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalCards = sponsorCompany.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const startIdx = (currentPage - 1) * cardsPerPage;
  const endIdx = Math.min(currentPage * cardsPerPage, totalCards);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: "20px", position: "relative" }}>
        {sponsorCompany.slice(startIdx, endIdx).map((card, index) => (
          <Card
            key={index}
            className="hover-card"
            style={{
              flex: 1,
              width: "300px",
              height: "380px",
              margin: "10px",
              borderRadius: "15px",
              boxShadow: '0 3px 10px rgb(0 0 0 / 0.4)',
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div style={{marginTop:'25px'}}>
              <img src={card.logo}/>
            </div>
            <Box p={2}>
              <div style={{ padding: "25px", fontSize: "25px" }}>{card.comapnyName}</div>
              <Typography variant="h7">{card.location}</Typography>
             
            </Box>
          </Card>
        ))}
        {currentPage > 1 && (
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            style={{ fontSize: "24px", color: "grey", cursor: "pointer", position: "absolute", left: "-40px", top: "50%" }}
            onClick={handlePrevPage}
          />
        )}
        {currentPage < totalPages && (
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            style={{ fontSize: "24px", color: "grey", cursor: "pointer", position: "absolute", right: "-40px", top: "50%" }}
            onClick={handleNextPage}
          />
        )}
      </div>
    </div>
  );
}

export default Sponsors;