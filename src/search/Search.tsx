import type { ChangeEvent, FocusEvent, RefObject } from 'react';
import React, { useRef, useState } from 'react';

import places from '../../assets/place.json';

const Search = () => {
  const [isLocationHovered, setIsLocationHovered] = useState(false);
  const [isBedroomsHovered, setIsBedroomsHovered] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] =
    useState('Todos os tipos');
  const [isDropdownRoomsVisible, setIsDropdownRoomsVisible] = useState(false);
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ['Todos', '1+', '2+', '3+', '4+'];

  const handleLocationHover = () => {
    setIsLocationHovered(true);
  };

  const handleLocationUnhover = () => {
    setIsLocationHovered(false);
  };

  const handleBedroomsHover = () => {
    setIsBedroomsHovered(true);
  };

  const handleBedroomsUnhover = () => {
    setIsBedroomsHovered(false);
  };

  const filteredAddresses = places.filter(
    (place) =>
      place.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      place.state.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      place.state.shortname.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleSelectRoom = (option: string) => {
    setSelectedRoom(option);
    if (inputRef.current) {
      inputRef.current.value = option;
    }
  };

  const handleSelectPropertyType = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPropertyType(event.target.value);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget as Node)
    ) {
      setIsDropdownRoomsVisible(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value.length > 0) {
      setIsDropdownVisible(true);
    } else {
      setIsDropdownVisible(false);
    }
  };

  const handleDropdownVisibility = (visible: boolean) => {
    setIsDropdownVisible(visible);
  };

  return (
    <div className="relative mx-auto my-4 flex max-w-xl rounded-full bg-white">
      <div
        className={`flex h-16 flex-col items-center rounded-full border-2 border-r-0 px-8 ${
          isLocationHovered ? 'bg-gray-200' : 'border-gray-100'
        }`}
        onMouseEnter={handleLocationHover}
        onMouseLeave={handleLocationUnhover}
      >
        <div className="mr-24 flex items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.12103 2.00098C11.6046 2.00098 14.2876 5.07467 13.8169 8.52631C13.6712 9.59502 13.2278 10.6012 12.5372 11.4298L7.998 16.8769L3.45875 11.4298C2.76825 10.6012 2.32479 9.59502 2.17905 8.52631C1.70837 5.07467 4.39138 2.00098 7.87496 2.00098H8.12103ZM7.87496 0.000976562C3.17941 0.000976562 -0.43704 4.14404 0.197392 8.79654C0.393827 10.2371 0.991571 11.5933 1.92231 12.7101L7.66658 19.6033C7.83906 19.8102 8.15694 19.8102 8.32941 19.6033L14.0737 12.7101C15.0044 11.5933 15.6022 10.2371 15.7986 8.79654C16.433 4.14404 12.8166 0.000976562 8.12103 0.000976562H7.87496Z"
              fill="#A2A7AA"
            />
            <path
              d="M6.498 7.74403C6.498 6.91561 7.16957 6.24403 7.998 6.24403C8.82642 6.24403 9.498 6.91561 9.498 7.74403C9.498 8.57246 8.82642 9.24403 7.998 9.24403C7.16957 9.24403 6.498 8.57246 6.498 7.74403Z"
              fill="#A2A7AA"
            />
          </svg>
          <span className="ml-2 mt-2 text-sm font-extrabold text-gray-700">
            Localização
          </span>
        </div>
        <input
          placeholder="Qual é a Localização?"
          className="-pl-14 mr-4 w-full bg-transparent outline-none placeholder:text-gray-500"
          type="text"
          name="location"
          id="location"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => {
            setIsFocused(true);
            handleDropdownVisibility(true);
          }}
          onBlur={() => {
            setIsFocused(false);
            setTimeout(() => handleDropdownVisibility(false), 200);
          }}
        />
        {isDropdownVisible && (
          <div className="absolute inset-x-0 top-full z-20 mt-1 max-w-[302px] rounded-2xl bg-white shadow-lg">
            <div className="p-2 text-center text-xs text-gray-500">
              Busque por cidade, região, bairro ou código
            </div>
            {filteredAddresses.map((place, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center gap-2 rounded-2xl p-2 text-sm hover:bg-gray-100"
                onClick={() => {
                  setInputValue(`${place.name}, ${place.state.shortname}`);
                  setIsDropdownVisible(false);
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.65384 0.334229C2.93863 0.334229 0.774468 2.60364 0.903295 5.31579C0.965051 6.61592 1.56337 7.82694 2.50457 8.726C3.15893 9.35106 3.8785 10.0804 4.33334 10.6676C5.26304 11.8677 6 13.6676 6 13.6676C6 13.6676 6.73697 11.8677 7.66667 10.6676C8.12151 10.0804 8.84108 9.35106 9.49544 8.726C10.4366 7.82694 11.035 6.61592 11.0967 5.31579C11.2255 2.60364 9.06137 0.334229 6.34617 0.334229H5.65384ZM6 7.33423C4.89543 7.33423 4 6.4388 4 5.33423C4 4.22966 4.89543 3.33423 6 3.33423C7.10457 3.33423 8 4.22966 8 5.33423C8 6.4388 7.10457 7.33423 6 7.33423Z"
                    fill="#A2A7AA"
                  />
                </svg>
                {place.name}, {place.state.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className={`flex h-16 flex-col items-center rounded-full border-2 border-r-0 px-8 ${
          isBedroomsHovered ? 'bg-gray-200' : 'border-gray-100'
        }`}
        onMouseEnter={handleBedroomsHover}
        onMouseLeave={handleBedroomsUnhover}
      >
        <div className="mr-24 flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="4" width="2" height="16" fill="#A2A7AA" />
            <rect
              x="19"
              y="13.8584"
              width="2"
              height="16"
              transform="rotate(90 19 13.8584)"
              fill="#A2A7AA"
            />
            <rect x="20" y="14" width="2" height="6" fill="#A2A7AA" />
            <mask id="path-4-inside-1_1_1015" fill="white">
              <path d="M18.5 7.8584C20.433 7.8584 22 9.4254 22 11.3584L22 14.8584C22 15.4107 21.5523 15.8584 21 15.8584L12 15.8584C11.4477 15.8584 11 15.4107 11 14.8584L11 8.8584C11 8.30611 11.4477 7.8584 12 7.8584L18.5 7.8584Z" />
            </mask>
            <path
              d="M18.5 7.8584C20.433 7.8584 22 9.4254 22 11.3584L22 14.8584C22 15.4107 21.5523 15.8584 21 15.8584L12 15.8584C11.4477 15.8584 11 15.4107 11 14.8584L11 8.8584C11 8.30611 11.4477 7.8584 12 7.8584L18.5 7.8584Z"
              stroke="#A2A7AA"
              stroke-width="4"
              mask="url(#path-4-inside-1_1_1015)"
            />
            <path
              d="M7.49933 8.92969C8.4964 8.92969 9.30469 9.73798 9.30469 10.735C9.30469 11.7321 8.4964 12.5404 7.49933 12.5404C6.50225 12.5404 5.69396 11.7321 5.69396 10.735C5.69396 9.73798 6.50225 8.92969 7.49933 8.92969Z"
              fill="#A2A7AA"
            />
          </svg>
          <span className="ml-2 mt-2 text-sm font-extrabold text-gray-700">
            Nº de Quartos
          </span>
        </div>
        <input
          ref={inputRef}
          placeholder="Quantos Quartos?"
          className="-pl-14 mr-4 w-full bg-transparent outline-none placeholder:text-gray-500"
          type="text"
          name="bedrooms"
          id="bedrooms"
          onFocus={() => {
            setIsFocused(true);
            setIsDropdownRoomsVisible(true);
          }}
          onBlur={(event) => {
            setIsFocused(false);
            handleBlur(event);
          }}
        />
        {isDropdownRoomsVisible && (
          <div
            ref={dropdownRef}
            className="inset-x-50 absolute top-full z-20 mt-1 max-w-[302px] rounded-2xl bg-white shadow-lg"
          >
            <div className="p-4">
              <label className="mb-4 block text-sm font-bold text-gray-700">
                Número de Quartos
              </label>
              <div className="flex justify-around gap-x-2">
                {options.map((option) => (
                  <button
                    key={option}
                    className={`rounded-full border-2 p-2 text-xs font-bold ${selectedRoom === option ? 'border-purple-500 bg-purple-50 text-purple-500' : 'border-gray-300'}`}
                    onClick={() => handleSelectRoom(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <hr />
            <div className="p-4">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Tipo de Propriedade
              </label>
              <select
                className="form-select mt-1 block w-full rounded-lg border-2 p-2"
                value={selectedPropertyType}
                onChange={handleSelectPropertyType}
              >
                <option>Todos os tipos</option>
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Estúdio</option>
              </select>
            </div>
          </div>
        )}
        <button
          type="submit"
          className={`absolute right-3 top-2 inline-flex items-center justify-center rounded-full ${
            isFocused ? 'bg-primary-800 px-12 py-2' : 'bg-primary-700 p-0'
          } text-white outline-none transition duration-150 ease-in-out hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:size-12`}
        >
          {isFocused ? (
            <>
              <svg
                className="mr-6"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0227 7.91828C13.0939 8.41419 12.776 8.78327 12.3704 8.78327C11.9647 8.78327 11.6432 8.45122 11.5629 8.05361C11.4523 7.50662 11.2183 6.98861 10.8747 6.54082C10.531 6.09302 10.0913 5.73285 9.59153 5.4845C9.22826 5.30397 8.99073 4.90751 9.09573 4.51568C9.20072 4.12384 9.62255 3.91163 10.0584 4.09814C10.8675 4.44437 11.4994 4.94189 12.0401 5.64654C12.5808 6.35119 12.8976 7.04717 13.0227 7.91828Z"
                  fill="white"
                />
                <path
                  d="M8.50563 0C3.8081 0 0 3.8081 0 8.50563C0 13.2032 3.8081 17.0113 8.50563 17.0113C10.0623 17.0113 11.5213 16.5931 12.7764 15.863C13.0281 15.9517 13.2988 15.9999 13.5809 15.9999C13.8803 15.9999 14.1671 15.9455 14.4318 15.846L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L15.8461 14.4318C15.9456 14.1671 16 13.8803 16 13.5808C16 13.2988 15.9517 13.028 15.863 12.7763C16.5931 11.5212 17.0113 10.0623 17.0113 8.50563C17.0113 3.8081 13.2032 0 8.50563 0ZM2 8.50563C2 4.91267 4.91267 2 8.50563 2C12.0986 2 15.0113 4.91267 15.0113 8.50563C15.0113 12.0986 12.0986 15.0113 8.50563 15.0113C4.91267 15.0113 2 12.0986 2 8.50563Z"
                  fill="white"
                />
              </svg>
              <span className="text-sm font-bold">Buscar</span>
            </>
          ) : (
            <>
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0227 7.91828C13.0939 8.41419 12.776 8.78327 12.3704 8.78327C11.9647 8.78327 11.6432 8.45122 11.5629 8.05361C11.4523 7.50662 11.2183 6.98861 10.8747 6.54082C10.531 6.09302 10.0913 5.73285 9.59153 5.4845C9.22826 5.30397 8.99073 4.90751 9.09573 4.51568C9.20072 4.12384 9.62255 3.91163 10.0584 4.09814C10.8675 4.44437 11.4994 4.94189 12.0401 5.64654C12.5808 6.35119 12.8976 7.04717 13.0227 7.91828Z"
                  fill="white"
                />
                <path
                  d="M8.50563 0C3.8081 0 0 3.8081 0 8.50563C0 13.2032 3.8081 17.0113 8.50563 17.0113C10.0623 17.0113 11.5213 16.5931 12.7764 15.863C13.0281 15.9517 13.2988 15.9999 13.5809 15.9999C13.8803 15.9999 14.1671 15.9455 14.4318 15.846L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L15.8461 14.4318C15.9456 14.1671 16 13.8803 16 13.5808C16 13.2988 15.9517 13.028 15.863 12.7763C16.5931 11.5212 17.0113 10.0623 17.0113 8.50563C17.0113 3.8081 13.2032 0 8.50563 0ZM2 8.50563C2 4.91267 4.91267 2 8.50563 2C12.0986 2 15.0113 4.91267 15.0113 8.50563C15.0113 12.0986 12.0986 15.0113 8.50563 15.0113C4.91267 15.0113 2 12.0986 2 8.50563Z"
                  fill="white"
                />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export { Search };
