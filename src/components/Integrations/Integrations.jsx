import React from "react";
import styled from "styled-components";
import { integrations } from "../../data/constants"; // You'll add this in constants.js

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const IntegrationsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 1500px;
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  border-radius: 16px;
  padding: 18px 36px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 0px 12px rgba(133, 76, 230, 0.3);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const CardTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary + 80};
  padding: 10px 16px;
  background: ${({ theme }) => theme.bgLight};
  border-radius: 12px;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.text_secondary + 40};

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
    padding: 6px 10px;
  }
`;

const Integrations = () => {
  return (
    <Container id="integrations">
      <Wrapper>
        <Title>Integrations</Title>
        <Desc>
          These are the technologies and tools I’ve integrated into my projects
          for advanced functionalities.
        </Desc>

        <IntegrationsContainer>
          {integrations.map((item, index) => (
            <Card key={index}>
              <CardTitle>{item.title}</CardTitle>
              <List>
                {item.skills.map((skill, idx) => (
                  <Item key={idx}>{skill.name}</Item>
                ))}
              </List>
            </Card>
          ))}
        </IntegrationsContainer>
      </Wrapper>
    </Container>
  );
};

export default Integrations;
