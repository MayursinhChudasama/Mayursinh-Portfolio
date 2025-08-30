import React, { useReducer } from "react";
import CollapsableBtn from "../common/CollapsableBtn";
import SpotlightCard from "../GSAP/SpotlightCard";

function dispatchUI(state, action) {
  if (action.type == "OBJECT") {
    return {
      ...state,
      object: !state.object,
    };
  } else if (action.type == "INFO") {
    return {
      ...state,
      info: !state.info,
    };
  } else if (action.type == "SKILLS") {
    return {
      ...state,
      skills: { ...state.skills, obj: !state.skills.obj },
    };
  } else if (action.type == "LANGUAGES") {
    return {
      ...state,
      skills: {
        ...state.skills,
        languages: !state.skills.languages,
      },
    };
  } else if (action.type == "LIBRARIES") {
    return {
      ...state,
      skills: {
        ...state.skills,
        libraries: !state.skills.libraries,
      },
    };
  } else if (action.type == "STYLING") {
    return {
      ...state,
      skills: {
        ...state.skills,
        styling: !state.skills.styling,
      },
    };
  }
}

export default function ObjectCode() {
  const [state, dispatch] = useReducer(dispatchUI, {
    object: true,
    info: true,
    skills: { obj: true, languages: true, libraries: true, styling: true },
  });
  console.log(state);
  const purpleColor = "text-[#9980FF]";

  return (
    <SpotlightCard
      className='custom-spotlight-card w-full max-w-full'
      spotlightColor='#6b7280'>
      <div className='w-full max-w-full'>
        <div className='min-h-151 pb-4 bg-[#0d111f] rounded-lg h-full'>
          {/* Window Header */}
          <div className='px-4 py-2 bg-[#2d2d2d] flex items-center'>
            <div className='flex space-x-1.5 mr-3'>
              <div className='w-3 h-3 rounded-full bg-[#ff5f56]' />
              <div className='w-3 h-3 rounded-full bg-[#ffbd2e]' />
              <div className='w-3 h-3 rounded-full bg-[#27c93f]' />
            </div>
          </div>

          {/* OBJECT */}
          <div
            className={!state.object ? "p-4 flex" : "pt-4 px-4 flex"}
            onClick={() => {
              dispatch({ type: "OBJECT" });
            }}>
            <div
              className={`text-sm font-mono flex items-center hover:bg-[#3D3D3D]  `}>
              <CollapsableBtn state={state.object} />
              {!state.object ? (
                <div>
                  <span className='text-white'>{`{`}</span>
                  <span className='text-[#8f8f8f]'>info: </span>
                  <span className='text-white'>{`{…}, `}</span>
                  <span className='text-[#8f8f8f]'>skills: </span>
                  <span className='text-white'>{`{…}, `}</span>
                  <span className='text-[#8f8f8f]'>learning: </span>
                  <span
                    className={`${purpleColor} italic`}>{`'consistent'`}</span>
                  <span className='text-white'>{`}`}</span>
                </div>
              ) : (
                <div className='text-[#8f8f8f]'>Object</div>
              )}
            </div>
          </div>

          {state.object && (
            <div className='px-4 ml-2 text-sm font-mono overflow-x-auto '>
              {/* LEARNING */}
              <div className='ml-4.5 flex hover:bg-[#3D3D3D]'>
                <span className='text-[#71ACF8]'>{`learning`}</span>
                <span className={`${purpleColor}`}>{`: "consistent"`}</span>
              </div>
              {/* TITLE */}
              <div className='ml-4.5 flex hover:bg-[#3D3D3D]'>
                <span className='text-[#71ACF8]'>{`title`}</span>
                <span
                  className={`${purpleColor}`}>{`: "Frontend Developer"`}</span>
              </div>
              {/* INFO */}
              <div
                className={
                  state.info
                    ? "flex flex-col text-left"
                    : "hover:bg-[#3D3D3D]  flex"
                }
                onClick={() => {
                  dispatch({ type: "INFO" });
                }}>
                <div className='flex'>
                  <CollapsableBtn state={state.info} />
                  {state.info && (
                    <div>
                      <span className='text-[#71ACF8]'>{`info`}</span>
                      <span className='text-white'>{`:  `}</span>
                    </div>
                  )}
                </div>
                {!state.info && (
                  <div>
                    <span className='text-[#71ACF8]'>{`info`}</span>
                    <span className='text-white'>{`:  `}</span>
                    <span className='text-white'>{`  {`}</span>
                    <span className='text-[#8f8f8f]'>{`full_name`}</span>
                    <span className='text-white'>{`:  `}</span>
                    <span className='text-white'>{`{...}, `}</span>
                    <span className='text-[#8f8f8f]'>{`contact_num`}</span>
                    <span className='text-white'>{`:  `}</span>
                    <span className='text-white'>{`{...}, `}</span>
                    <span className='text-[#8f8f8f]'>{`email_address`}</span>
                    <span className='text-white'>{`:  `}</span>
                    <span className='text-white'>{`{...}`}</span>
                    <span className='text-white'>{`}`}</span>
                  </div>
                )}
                {state.info && (
                  <div className='ml-7 '>
                    <div className='hover:bg-[#3D3D3D]'>
                      <span className='text-[#71ACF8]'>{`full_name`}</span>
                      <span className='text-white'>{`: `}</span>
                      <span
                        className={`${purpleColor}`}>{`'Mayursinh Chudasama'`}</span>
                    </div>
                    <div className='hover:bg-[#3D3D3D]'>
                      <span className='text-[#71ACF8]'>{`contact_num`}</span>
                      <span className='text-white'>{`: `}</span>
                      <span
                        className={`${purpleColor}`}>{`'+91 88668 68324'`}</span>
                    </div>
                    <div className='hover:bg-[#3D3D3D]'>
                      <span className='text-[#71ACF8]'>{`email_address`}</span>
                      <span className='text-white'>{`: `}</span>
                      <span
                        className={`${purpleColor}`}>{`'contact.mayursinh@gmail.com'`}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* SKILLS */}
              <div
                className={
                  state.skills.obj
                    ? "flex flex-col text-left"
                    : "hover:bg-[#3D3D3D] w-full flex"
                }
                onClick={
                  !state.skills.obj
                    ? () => {
                        dispatch({ type: "SKILLS" });
                      }
                    : undefined
                }>
                <div
                  className='flex'
                  onClick={() => {
                    dispatch({ type: "SKILLS" });
                  }}>
                  <CollapsableBtn state={state.skills.obj} />
                  {state.skills.obj && (
                    <div>
                      <span className='text-[#71ACF8]'>{`skills`}</span>
                      <span className='text-white'>{`:  `}</span>
                    </div>
                  )}
                </div>
                {!state.skills.obj && (
                  <div>
                    <span className='text-[#71ACF8]'>{`skills`}</span>
                    <span className='text-white'>{`:  {`}</span>
                    <span className='text-[#8f8f8f]'>{`languages`}</span>
                    <span className='text-white'>{`: Array(4), `}</span>
                    <span className='text-[#8f8f8f]'>{`libraries`}</span>
                    <span className='text-white'>{`: Array(6), `}</span>
                    <span className='text-[#8f8f8f]'>{`styling`}</span>
                    <span className='text-white'>{`: Array(5)}`}</span>
                  </div>
                )}
                {state.skills.obj && (
                  <div className='ml-5'>
                    {/*languages  */}
                    <div
                      className={
                        state.skills.languages
                          ? "flex p-1 text-left"
                          : "hover:bg-[#3D3D3D] flex "
                      }
                      onClick={() => {
                        dispatch({ type: "LANGUAGES" });
                      }}>
                      {!state.skills.languages && (
                        <CollapsableBtn state={state.skills.languages} />
                      )}
                      <div className='flex'>
                        {state.skills.languages && (
                          <div>
                            <div className='flex'>
                              <CollapsableBtn state={state.skills.languages} />
                              <span className='text-[#71ACF8]'>{`languages`}</span>
                              <span className='text-white'>{`: Array(4)`}</span>
                            </div>
                            <div className='flex flex-col ml-8'>
                              {["HTML", "CSS", "JavaScript", "TypeScript"].map(
                                (lang, i, arr) => (
                                  <span
                                    className='hover:bg-[#3D3D3D]'
                                    key={lang}>
                                    <span className='text-[#71ACF8]'>{i}</span>
                                    <span className='text-white'>{`: `}</span>
                                    <span
                                      className={`${purpleColor}`}>{`"${lang}"`}</span>
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      {!state.skills.languages && (
                        <div>
                          <div>
                            <span className='text-[#71ACF8]'>{`languages`}</span>
                            <span className='text-white'>{`: [`}</span>
                            {["HTML", "CSS", "JavaScript", "TypeScript"].map(
                              (lang, i, arr) => (
                                <span key={lang}>
                                  <span
                                    className={`${purpleColor}`}>{`'${lang}'`}</span>
                                  {i < arr.length - 1 && (
                                    <span className='text-white'>{`, `}</span>
                                  )}
                                </span>
                              )
                            )}
                            <span className='text-white'>{`]`}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    {/*libraries  */}
                    <div
                      className={
                        state.skills.libraries
                          ? "flex p-1 text-left"
                          : "hover:bg-[#3D3D3D]  flex"
                      }
                      onClick={() => {
                        dispatch({ type: "LIBRARIES" });
                      }}>
                      {!state.skills.libraries && (
                        <CollapsableBtn state={state.skills.libraries} />
                      )}
                      <div className='flex'>
                        {state.skills.libraries && (
                          <div>
                            <div className='flex'>
                              <CollapsableBtn state={state.skills.libraries} />
                              <span className='text-[#71ACF8]'>{`libraries`}</span>
                              <span className='text-white'>{`: Array(6)`}</span>
                            </div>
                            <div className='flex flex-col ml-8'>
                              {[
                                "React JS",
                                "NEXT JS",
                                "Redux / Redux Toolkit (RTK)",
                                "RTK Query",
                                "React Query",
                                "React Router DOM",
                              ].map((lib, i, arr) => (
                                <span
                                  className='hover:bg-[#3D3D3D]'
                                  key={lib}>
                                  <span className='text-[#71ACF8]'>{i}</span>
                                  <span className='text-white'>{`: `}</span>
                                  <span
                                    className={`${purpleColor}`}>{`"${lib}"`}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      {!state.skills.libraries && (
                        <div>
                          <div>
                            <span className='text-[#71ACF8]'>{`libraries`}</span>
                            <span className='text-white'>{`: [`}</span>
                            {[
                              "React JS",
                              "NEXT JS",
                              "Redux / Redux Toolkit (RTK)",
                              "RTK Query",
                              "React Query",
                              "React Router DOM",
                            ].map((lib, i, arr) => (
                              <span key={lib}>
                                <span
                                  className={`${purpleColor}`}>{`'${lib}'`}</span>
                                {i < arr.length - 1 && (
                                  <span className='text-white'>{`, `}</span>
                                )}
                              </span>
                            ))}
                            <span className='text-white'>{`]`}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    {/*styling  */}
                    <div
                      className={
                        state.skills.styling
                          ? "flex p-1 text-left"
                          : "hover:bg-[#3D3D3D] flex"
                      }
                      onClick={() => {
                        dispatch({ type: "STYLING" });
                      }}>
                      {!state.skills.styling && (
                        <CollapsableBtn state={state.skills.styling} />
                      )}
                      <div className='flex'>
                        {state.skills.styling && (
                          <div>
                            <div className='flex'>
                              <CollapsableBtn state={state.skills.styling} />
                              <span className='text-[#71ACF8] '>{`styling`}</span>
                              <span className='text-white'>{`: Array(5)`}</span>
                            </div>
                            <div className='flex flex-col ml-8'>
                              {[
                                "SCSS/SASS",
                                "Tailwind CSS",
                                "Flowbite",
                                "Bootstrap",
                                "Material-UI",
                              ].map((lib, i, arr) => (
                                <span
                                  className='hover:bg-[#3D3D3D]'
                                  key={lib}>
                                  <span className='text-[#71ACF8]'>{i}</span>
                                  <span className='text-white'>{`: `}</span>
                                  <span
                                    className={`${purpleColor}`}>{`"${lib}"`}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      {!state.skills.styling && (
                        <div>
                          <div>
                            <span className='text-[#71ACF8] '>{`styling`}</span>
                            <span className='text-white'>{`: [`}</span>
                            {[
                              "SCSS/SASS",
                              "Tailwind CSS",
                              "Flowbite",
                              "Bootstrap",
                              "Material-UI",
                            ].map((lib, i, arr) => (
                              <span key={lib}>
                                <span
                                  className={`${purpleColor} `}>{`'${lib}'`}</span>
                                {i < arr.length - 1 && (
                                  <span className='text-white '>{`, `}</span>
                                )}
                              </span>
                            ))}
                            <span className='text-white '>{`]`}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
