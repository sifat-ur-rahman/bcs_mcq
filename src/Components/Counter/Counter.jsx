import CountUp from "react-countup";

function Counter({ number,title}) {
  return (
    <div className="">
      <CountUp enableScrollSpy duration={5} className="counter" end={number} />
      <span>{title}</span>
    </div>
  )
}

export default Counter