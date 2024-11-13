import React from 'react';
import styled from 'styled-components';
import Reward from './Gambar/reward.png';
import Panah from './Gambar/long-right-arrow.png';
import Step1 from './Gambar/step1.png';
import Step2 from './Gambar/step2.png';
import Step3 from './Gambar/step3.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

const GambarReward = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const JudulBagian = styled.div`
  margin-bottom: 32px;
`;

const Judul = styled.h1`
  color: #f97316;
  font-size: 24px;
  font-weight: 600;
  margin-top: 8px;
`;

const Subjudul = styled.p`
  margin-top: 8px;
`;

const Hr = styled.hr`
  width: 50%;
  border: 1px solid #f97316;
  margin: 16px auto;
`;

const ContainerProses = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px; 
  flex-wrap: wrap; 

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Langkah = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const ContainerGambar = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BorderLuar = styled.div`
  width: 100%;
  height: 100%;
  border: 4px solid #f97316;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const BorderDalam = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #4a5568;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const Gambar = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 50%;
`;

const GambarPanah = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;

  @media (max-width: 768px) {
    transform: rotate(90deg); 
  margin : 15px;
    }
`;

const Teks = styled.p`
  margin-top: 15px;
`;

function App() {
  return (
    <Container>
      <GambarReward src={Reward} alt="Reward" />
      <JudulBagian>
        <Judul>QUALITY</Judul>
        <Hr />
        <Subjudul>More Alumina, Stronger Porcelain</Subjudul>
      </JudulBagian>
      <ContainerProses>
        <Langkah>
          <ContainerGambar>
            <BorderLuar>
              <BorderDalam>
                <Gambar src={Step1} alt="Step 1: Add 30% of Alumina to the mixture of Clay" />
              </BorderDalam>
            </BorderLuar>
          </ContainerGambar>
          <Teks>Add 30% of Alumina to the mixture of Clay</Teks>
        </Langkah>
        <GambarPanah src={Panah} alt="Arrow" />
        <Langkah>
          <ContainerGambar>
            <BorderLuar>
              <BorderDalam>
                <Gambar src={Step2} alt="Step 2: High temperature firing at 1350°C" />
              </BorderDalam>
            </BorderLuar>
          </ContainerGambar>
          <Teks>High temperature firing at 1350°C</Teks>
        </Langkah>
        <GambarPanah src={Panah} alt="Arrow" />
        <Langkah>
          <ContainerGambar>
            <BorderLuar>
              <BorderDalam>
                <Gambar src={Step3} alt="Step 3: Achieve stronger porcelain" />
              </BorderDalam>
            </BorderLuar>
          </ContainerGambar>
          <Teks>Achieve stronger porcelain</Teks>
        </Langkah>
      </ContainerProses>
    </Container>
  );
}
export default App;