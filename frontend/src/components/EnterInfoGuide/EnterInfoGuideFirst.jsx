import mascot from '../../assets/images/WalkingGirl.gif'
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';

const PlainButton = styled(Button)`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;

const EnterInfoGuideFirst = () => { 
      const handleNext = () => {
        console.log('다음');
        window.location.href ="/guide/second"
      };
    return (
        <div>
            <div className='Guide__First__Title'>
                <h2>시작하기전에,</h2>
                <h2>회원님에 대해</h2>
                <h2>조금더 알고 싶어요!</h2>
            </div>
            <div className='Guide__First__Item'>
                <img className="Guide__First__Item__Mascot" src={mascot} alt="Mascot" />
            </div>
            <div className="recommend-bottom">
                <PlainButton/>
                <PlainButton endIcon={<ArrowForwardIosIcon />} onClick={handleNext}>
                    다음
                </PlainButton>
            </div>
        </div>
    );
};

export default EnterInfoGuideFirst;