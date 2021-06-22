import React from 'react';

const slides = [
  {
    title: "Simple Weather 1",
    subtitle: "Screen 1",
    description: "",
    image:
      "IMPORT_FROM_JSON"
  },
  {
    title: "Simple Weather 2",
    subtitle: "Screen 2",
    description: "",
    image:
      "IMPORT_FROM_JSON"
  },
  {
    title: "Simple Weather 3",
    subtitle: "Screen 3",
    description: "",
    image:
      "IMPORT_FROM_JSON"
  },
  {
    title: "Simple Weather 4",
    subtitle: "Screen 4",
    description: "",
    image:
      "IMPORT_FROM_JSON"
  },
  {
    title: "Simple Weather 5",
    subtitle: "Screen 5",
    description: "",
    image:
      "IMPORT_FROM_JSON"
  }
];

// function useTilt(active: any) {
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     if (!ref.current || !active) {
//       return;
//     }

//     const state = {
//       rect: undefined,
//       mouseX: undefined,
//       mouseY: undefined
//     };

//     let el = ref.current;

//     const handleMouseMove = (e: any) => {
//       if (!el) {
//         return;
//       }
//       if (!state.rect) {
//         state.rect = el.getBoundingClientRect();
//       }
//       state.mouseX = e.clientX;
//       state.mouseY = e.clientY;
//       const px = (state.mouseX - state.rect.left) / state.rect.width;
//       const py = (state.mouseY - state.rect.top) / state.rect.height;

//       el.style.setProperty("--px", px);
//       el.style.setProperty("--py", py);
//     };

//     el.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       el.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [active]);

//   return ref;
// }

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state: any, event: any) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

// function Slide({ slide, offset }) {
//   const active = offset === 0 ? true : null;
//   const ref = useTilt(active);

//   return (
//     <div
//       ref={ref}
//       className="slide"
//       data-active={active}
//       style={{
//         "--offset": offset,
//         "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
//       }}
//     >
//       <div
//         className="slideBackground"
//         style={{
//           backgroundImage: `url('${slide.image}')`
//         }}
//       />
//       <div
//         className="slideContent"
//         style={{
//           backgroundImage: `url('${slide.image}')`
//         }}
//       >
//         <div className="slideContentInner">
//           <h2 className="slideTitle">{slide.title}</h2>
//           <h3 className="slideSubtitle">{slide.subtitle}</h3>
//           <p className="slideDescription">{slide.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

const SlideShow = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">...</div>
  );

  // return (
  //   <div className="slides">
  //     <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

  //     {[...slides, ...slides, ...slides].map((slide, i) => {
  //       let offset = slides.length + (state.slideIndex - i);
  //       return <Slide slide={slide} offset={offset} key={i} />;
  //     })}
  //     <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
  //   </div>
  // );
};

SlideShow.displayName = 'SlideShow';

export default SlideShow;