import React from "react";
import "./supportgroup.css";
import { Accordion, Card } from "react-bootstrap";

function SupportGroup() {
  const mapStyles = {
    width: '100%',
    height: '100%',
  };
  return (
    <div className="container" id="supportGroupContainer">
      <Accordion className="supportGroupAccordion">
        <div>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="miasa">
            Befrienderskl
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" className="miasaOpen">
            <Card.Body>
              <iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9987556383703!2d101.64148411475723!3d3.094989097746255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4bc0dc176b8f%3A0x731f56bd15ef1d7d!2sBefrienders%20KL!5e0!3m2!1sen!2smy!4v1585648711582!5m2!1sen!2smy"></iframe>
              <div className="supportGroupDetails">
                <h6 className="address">Address:</h6>
                <h6>The Befrienders, 95, Jalan Templer, Pjs 7, 46000 Petaling Jaya, Selangor</h6>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </div>
      </Accordion>
      <Accordion className="supportGroupAccordion">
        <div>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="miasa">
            Mental Illness Awareness And Support Association (MIASA)
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" className="miasaOpen">
            <Card.Body>
              <iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63739.66396307493!2d101.57321627910154!3d3.1659263999999956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4f31215f2563%3A0xea01259c4ba9c726!2sMental%20Illness%20Awareness%20%26%20Support%20Association%20(MIASA)!5e0!3m2!1sen!2smy!4v1585632812866!5m2!1sen!2smy"></iframe>
              <div className="supportGroupDetails">
                <h6 className="address">Address:</h6>
                <h6>DS 1-07, Block D Retail Lot, Metropolitan Square, Jalan PJU 8/1, Bandar Damansara Perdana, 47820 Petaling Jaya, Selangor</h6>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </div>
      </Accordion>
      <Accordion className="supportGroupAccordion">
        <div>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="miasa">
            SMART Recovery Malaysia Meetup
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" className="miasaOpen">
            <Card.Body>
              <iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8395677131525!2d101.63131!3d3.1370440000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDgnMTMuNCJOIDEwMcKwMzcnNTIuNyJF!5e0!3m2!1sen!2smy!4v1585646843819!5m2!1sen!2smy"></iframe>
              <div className="supportGroupDetails">
                <h6 className="address">Address:</h6>
                <h6>DS 1-07, Block D Retail Lot, Metropolitan Square, Jalan PJU 8/1, Bandar Damansara Perdana, 47820 Petaling Jaya, Selangor</h6>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </div>
      </Accordion>
      <Accordion className="supportGroupAccordion">
        <div>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="miasa">
            Introverts And Conversations
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" className="miasaOpen">
            <Card.Body>
              <iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.863695928026!2d101.6265!3d3.1307060000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDcnNTAuNSJOIDEwMcKwMzcnMzUuNCJF!5e0!3m2!1sen!2smy!4v1585647234530!5m2!1sen!2smy"></iframe>
              <div className="supportGroupDetails">
                <h6 className="address">Address:</h6>
                <h6>1st Floor, Tropicana City Mall, Jalan SS20/27, Damansara Intan, 47300 Petaling Jaya, Selangor</h6>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </div>
      </Accordion>
      <Accordion className="supportGroupAccordion">
        <div>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="miasa">
            Alcoholics Anonymous Malaysia
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" className="miasaOpen">
            <Card.Body>
              <iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3983.95705133561!2d101.6525508!3d3.1060617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3c8f91a1c368024!2sMarist%20Educare%20Centre%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1585647527269!5m2!1sen!2smy"></iframe>
              <div className="supportGroupDetails">
                <h6 className="address">Address:</h6>
                <h6>1B, Jalan 10/3, Pjs 10, 46000 Petaling Jaya, Selangor</h6>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </div>
      </Accordion>
      <Accordion className="supportGroupAccordion">
        <div>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="miasa">
            National Cancer Society of Malaysia (NCSM)
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" className="miasaOpen">
            <Card.Body>
              <iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.720753347067!2d101.70290271475739!3d3.168069397693256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37dc49d2bd5d%3A0xe11631f6a7996d33!2sNational%20Cancer%20Society%20of%20Malaysia%20(NCSM)!5e0!3m2!1sen!2smy!4v1585647797002!5m2!1sen!2smy"></iframe>
              <div className="supportGroupDetails">
                <h6 className="address">Address:</h6>
                <h6>66, Jalan Raja Muda Abdul Aziz, Kampung Baru, 50300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</h6>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </div>
      </Accordion>
      <Accordion className="supportGroupAccordion">
        <div>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="miasa">
            Heart Club Plus
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" className="miasaOpen">
            <Card.Body>
              <iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15934.914955466105!2d101.6053421!3d3.1659937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1927d4ffe0905956!2sHeart%20Club%20Plus!5e0!3m2!1sen!2smy!4v1585647984641!5m2!1sen!2smy"></iframe>
              <div className="supportGroupDetails">
                <h6 className="address">Address:</h6>
                <h6>Unit 20-2, Jalan PJU 8/50, Damansara Perdana, Selangor, 47820 Petaling Jaya</h6>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </div>
      </Accordion>
      <Accordion className="supportGroupAccordion">
        <div>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="miasa">
            Alzheimer's Disease Foundation Malaysia
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" className="miasaOpen">
            <Card.Body>
              <iframe clasName="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9417162685404!2d101.64873431475728!3d3.110123297735284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4bd775b23681%3A0xc7bffbf8b7c0eb72!2sAlzheimers%20Disease%20Foundation%20Malaysia!5e0!3m2!1sen!2smy!4v1585648642121!5m2!1sen!2smy"></iframe>
              <div className="supportGroupDetails">
                <h6 className="address">Address:</h6>
                <h6>No. 6, Lorong 11/8e, Pjs 11, 46200 Petaling Jaya, Selangor</h6>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </div>
      </Accordion>
      <Accordion className="supportGroupAccordion">
        <div>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="miasa">
            Cornelia De Lange Syndrome Support Group
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" className="miasaOpen">
            <Card.Body>
              <iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7624041725244!2d101.65803731475738!3d3.1572279977011126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc48f8b6d32d69%3A0xfdda1d1d7a68494e!2sCornelia%20De%20Lange%20Syndrome%20Support%20Group!5e0!3m2!1sen!2smy!4v1585649137633!5m2!1sen!2smy"></iframe>
              <div className="supportGroupDetails">
                <h6 className="address">Address:</h6>
                <h6>No.7, Masjid Wilayah Persekutuan, Persiaran Beringin, Bukit Damansara, 50490 Kuala Lumpur, Federal Territory of Kuala Lumpur</h6>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </div>
      </Accordion>
    </div >
  )
}

export default SupportGroup;