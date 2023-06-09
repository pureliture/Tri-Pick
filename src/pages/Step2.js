import { React } from 'react';
import ProgressBar from '../components/ProgressBar';
import Subject from '../components/Subject';
import Question from '../components/Question';
import Rect from '../components/Rect';
import GoBackBar from '../components/GoBackBar';
import CountryCard from 'components/CountryCard';
import Region from 'components/Region';
import RadiusRect from 'components/RadiusRect';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { allSelected } from 'features/tasteRegion/tasteRegion';

const Step2 = () => {
  const count = 4231;
  const selectedStatus = useAppSelector(
    (state) => state.tasteRegion.selectedStatus,
  );
  const isAllSelected = selectedStatus.every((ele) => ele === true);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/step3');
  };

  const allHandleClick = () => {
    dispatch(allSelected());
  };

  return (
    <div className="page" style={{ minHeight: '720px', marginBottom: '102px' }}>
      <GoBackBar />
      <div style={{ margin: '2px auto' }}>
        <ProgressBar value={66} />
      </div>
      <div style={{ margin: '30px' }}>
        <Question
          subject={`Plan & Play \n 떠나고 싶은 국가는?`}
          description={
            '추천과 알림을 통해 \n 새로운 소식을 빠르게 전해드릴게요.'
          }
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <RadiusRect
          width="360px"
          height="100px"
          backgroundColor="black"
          color="white"
          onClick={allHandleClick}
        >
          <div
            style={{
              display: 'flex',
              margin: '30px',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="region">ALL</div>
              <RadiusRect width="56px" height="33px">
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#636363',
                  }}
                >
                  {count.toLocaleString()}
                </div>
              </RadiusRect>
            </div>
            <img
              src={isAllSelected ? '/check_full.png' : '/check.png'}
              style={{ width: '32px', height: '32px' }}
            />
          </div>
        </RadiusRect>
      </div>
      <div style={{ margin: '20px' }}>
        <Subject description="아시아 대륙" />
      </div>
      <Region id={0} region="동북아" count={2121}>
        <CountryCard
          imgSrc={'/japan_2.png'}
          name="일본"
          count={821}
          backgroundColor="#F0E0B5"
        />
        <CountryCard
          imgSrc={'/taiwan.png'}
          name="대만"
          count={243}
          backgroundColor="#8DAD9E"
        />
      </Region>
      <Region id={1} region="동남아" count={1123}>
        <CountryCard
          imgSrc={'/singapore.png'}
          name="싱가포르"
          count={312}
          backgroundColor="#FFDFFF"
        />
        <CountryCard
          imgSrc={'/laos_s.png'}
          name="라오스"
          count={82}
          backgroundColor="#BADC94"
        />
      </Region>
      <Region id={2} region="서남아" count={1048}>
        <CountryCard
          imgSrc={'/maldive.png'}
          name="몰디브"
          count={642}
          backgroundColor="#C7EAE7"
        />
        <CountryCard
          imgSrc={'/india.png'}
          name="인도"
          count={152}
          backgroundColor="#C0BABA"
        />
      </Region>
      <div style={{ margin: '20px' }}>
        <Subject description="유럽 대륙" />
      </div>
      <Region id={3} region="유럽" count={876}>
        <CountryCard
          imgSrc={'/greece.png'}
          name="그리스"
          count={412}
          backgroundColor="#F0E0B5"
        />
        <CountryCard
          imgSrc={'/nederland.png'}
          name="네덜란드"
          count={382}
          backgroundColor="#8DAD9E"
        />
      </Region>
      <div style={{ position: 'fixed', bottom: '0' }}>
        <Rect height="52px" text="다음" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Step2;
