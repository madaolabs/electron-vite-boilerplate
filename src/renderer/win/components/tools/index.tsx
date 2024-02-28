import { CloseCircleOutlined } from "@ant-design/icons";
import { useControlStore } from "../../store";

import "./style.scss";

export function Tools() {
  const [activeTool, setActiveTool] = useControlStore((state) => [
    state.activeTool,
    state.setActiveTool,
  ]);

  const handleCloseApp = () => {
    window.toMainProcess.closeApp();
  };

  return (
    <div className="tool-option-container">
      <div className="tool-option-exit" onClick={handleCloseApp}>
        <CloseCircleOutlined />
      </div>
    </div>
  );
}
