import { useSpring, animated } from '@react-spring/web';

function MyComponent() {
  const props = useSpring({
    scale: 1,
    from: { scale: 0.9 },
    config: { tension: 300, friction: 15 },
  });

  return (
    <animated.div
      style={props}
      onMouseEnter={() => props.scale.set(1.1)}
      onMouseLeave={() => props.scale.set(1)}
    >
      Hover over me!
    </animated.div>
  );
}

export default MyComponent;