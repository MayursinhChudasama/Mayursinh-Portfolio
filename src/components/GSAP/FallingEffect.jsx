import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";

const FallingEffect = ({
  items = [], // Array of { id, image, title, category }
  trigger = "auto",
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 0.5,
  mouseConstraintStiffness = 0.2,
  itemWidth = 100,
  itemHeight = 100,
  columns = 4,
  gap = 20,
}) => {
  const containerRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const [effectStarted, setEffectStarted] = useState(trigger === "auto"); // Start automatically only if trigger is 'auto'
  const [resetKey, setResetKey] = useState(0); // Key to force re-render
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Update container size on mount and window resize
  useEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // useEffect(() => {
  //   if (trigger === "auto") {
  //     setEffectStarted(true);
  //     return;
  //   }
  //   if (trigger === "scroll" && containerRef.current) {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         if (entry.isIntersecting) {
  //           setEffectStarted(true);
  //           observer.disconnect();
  //         }
  //       },
  //       { threshold: 0.1 }
  //     );
  //     observer.observe(containerRef.current);
  //     return () => observer.disconnect();
  //   }
  // }, [trigger]);

  useEffect(() => {
    if (!effectStarted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } =
      Matter;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    if (width <= 0 || height <= 0) return;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes,
      },
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: "transparent" },
    };
    const floor = Bodies.rectangle(
      width / 2,
      height + 25,
      width,
      50,
      boundaryOptions
    );
    const leftWall = Bodies.rectangle(
      -25,
      height / 2,
      50,
      height,
      boundaryOptions
    );
    const rightWall = Bodies.rectangle(
      width + 25,
      height / 2,
      50,
      height,
      boundaryOptions
    );
    const ceiling = Bodies.rectangle(
      width / 2,
      -25,
      width,
      50,
      boundaryOptions
    );

    // Calculate grid positions for items
    const itemBodies = items.map((item, index) => {
      const row = Math.floor(index / columns);
      const col = index % columns;

      const x = (col + 0.5) * (itemWidth + gap);
      const y = (row + 0.5) * (itemHeight + gap);

      const body = Bodies.rectangle(x, y, itemWidth, itemHeight, {
        render: { fillStyle: "transparent" },
        restitution: 0.6,
        frictionAir: 0.02,
        friction: 0.1,
        chamfer: { radius: 8 },
        label: item.id,
      });

      // Add some initial velocity for a more dynamic effect
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 3,
        y: (Math.random() - 0.5) * 3,
      });

      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);

      return { id: item.id, body };
    });

    // Store item elements for later updates
    const itemElements = {};
    items.forEach((item) => {
      const element = document.getElementById(`falling-item-${item.id}`);
      if (element) {
        itemElements[item.id] = element;
      }
    });

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });
    render.mouse = mouse;

    World.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      ceiling,
      mouseConstraint,
      ...itemBodies.map((wb) => wb.body),
    ]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const updateLoop = () => {
      itemBodies.forEach(({ id, body }) => {
        const element = itemElements[id];
        if (element) {
          element.style.left = `${body.position.x}px`;
          element.style.top = `${body.position.y}px`;
          element.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
        }
      });
      Matter.Engine.update(engine);
      requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [
    effectStarted,
    gravity,
    wireframes,
    backgroundColor,
    mouseConstraintStiffness,
    items, // Add items to dependency array
  ]);

  const handleTrigger = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!effectStarted) {
      setEffectStarted(true);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Reset physics world
    if (window.engine) {
      Matter.Engine.clear(window.engine);
      window.engine = null;
    }

    // Reset state
    setEffectStarted(false);
    setResetKey((prev) => prev + 1); // Force re-render

    // Re-initialize after a small delay to allow state to update
    setTimeout(() => {
      if (trigger === "auto") {
        setEffectStarted(true);
      }
    }, 50);
  };

  // Calculate grid positions for initial layout
  const calculateGridPosition = (index) => {
    const row = Math.floor(index / columns);
    const col = index % columns;
    return {
      x: (col + 0.5) * (itemWidth + gap),
      y: (row + 0.5) * (itemHeight + gap),
    };
  };

  // SVG Reset Icon
  const ResetIcon = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-4 w-4'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
      />
    </svg>
  );

  return (
    <div className='flex flex-col h-full'>
      {effectStarted && (
        <div className='flex justify-center mb-2'>
          <button
            onClick={handleReset}
            className='flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-gray-800/80 hover:bg-gray-700/90 backdrop-blur-sm rounded-full border border-gray-700/50 shadow-lg transition-all duration-300'
            title='Reset animation'>
            <ResetIcon />
            {/* <span>Reset</span> */}
          </button>
        </div>
      )}
      <div
        key={`falling-effect-${resetKey}`}
        ref={containerRef}
        className='relative w-full flex-1 overflow-hidden group'
        onClick={trigger === "click" ? handleTrigger : undefined}
        onMouseEnter={trigger === "hover" ? handleTrigger : undefined}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "400px",
        }}>
        {/* Canvas for physics simulation - only show after click */}
        {effectStarted && (
          <div
            ref={canvasContainerRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Items in grid layout that will fall on click */}
        <div className='relative w-full h-full'>
          {items.map((item, index) => {
            const gridPos = calculateGridPosition(index);
            return (
              <div
                key={item.id}
                id={`falling-item-${item.id}`}
                className='absolute flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110'
                style={{
                  width: `${itemWidth}px`,
                  height: `${itemHeight}px`,
                  left: `${gridPos.x}px`,
                  top: `${gridPos.y}px`,
                  transform: effectStarted
                    ? "translate(-50%, -50%)"
                    : "translate(-50%, -50%)",
                  cursor: "grab",
                  transition: effectStarted
                    ? "none"
                    : "transform 0.3s ease-out",
                }}>
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  className='w-22 h-22 object-contain'
                  title={item.title}
                />
                {/* <p>{item.title}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FallingEffect;
