import resumePics from "./ResumePic.png"
import "./Resume.css";
import React, { useState, useEffect } from "react";
import  Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "./TristanWilson.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="success"
            id="resumeBtn"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Card.Img
          src={resumePics}
          id="resumePic"
          alt="Resume Picture"
          />
          </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="success"
            id="resumeBtn"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
