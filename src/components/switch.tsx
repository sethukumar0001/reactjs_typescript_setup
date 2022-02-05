import "src/assets/scss/switch/index.scss";

export default function SwitchComponent(props:any) {
  const randomId = Math.random();
  return (
    <label className="switch" htmlFor={`switch-${randomId}`}>
      <input
        type="checkbox"
        name="switch"
        id={`switch-${randomId}`}
        checked={props.checked}
        onChange={()=>props.handleChangeStatus(props.index,props.type,!props.status)}
      />
      <span className="slider round"></span>
    </label>
  );
}
