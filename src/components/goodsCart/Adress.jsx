import React, { useCallback } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const width = 500;
const height = 400;

const Adress = () => {
  const onClickLink = useCallback(() => {
    /*global daum*/
    new daum.Postcode({
      oncomplete: function (data) {
        let left = Math.ceil((window.screen.width - width) / 2);
        let top = Math.ceil((window.screen.height - height) / 2);

        const addr = data.userSelectedType === 'R' ? data.roadAddress : data.jibunAddress;
        const buildingName = data.buildingName ? data.buildingName : '';

        sessionStorage.setItem('address', addr);
        sessionStorage.setItem('buildingName', buildingName);

        window.open(
          '/kakao/destination',
          '_blank',
          `height=${height},width=${width}, top=${top}, left=${left}`,
        );
      },
    }).open({
      left: Math.ceil((window.screen.width - width) / 2),
      top: Math.ceil((window.screen.height - height) / 2),
    });
  }, []);

  let addr = sessionStorage.getItem('address');
  let buildingName = sessionStorage.getItem('buildingName');

  // const addressData = '경기도 부천시 가로공원 111';
  // const addressData = '';

  return (
    <div className="w-r-28.4 px-8 py-9 border text-r-1.6 font-bold">
      <p>
        <FaMapMarkerAlt className="inline-block mr-3" />
        배송지
      </p>
      {addr === null && (
        <p>
          <span className="text-kp-600">배송지를 입력</span>하고
          <span className="block">배송유형을 확인해 보세요!</span>
        </p>
      )}
      {addr !== null && (
        <p className="pt-4 font-medium">
          <span>{`${addr} ${buildingName && '(' + buildingName + ')'}`}</span>
          <span className="block text-kp-600 text-r-1.4 pt-3">샛별배송</span>
        </p>
      )}
      <p
        onClick={onClickLink}
        className="cursor-pointer mt-7 border rounded-r-0.4 border-kp-600 w-full h-14 text-r-1.2 text-kp-600 inline-block text-center leading-r-3.5 font-semibold"
      >
        {addr === null && (
          <>
            <FaSearch className="inline-block mr-3" />
            주소 검색
          </>
        )}
        {addr !== null && <span>배송지 변경</span>}
      </p>
    </div>
  );
};

export default Adress;
