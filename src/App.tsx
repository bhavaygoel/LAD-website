import { Button } from "@material-tailwind/react";
import { CardWithLink } from "./Card";


function App() {

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-row">
        <CardWithLink title={"ELAD"}/>
        <CardWithLink title={"ELAD"}/>
      </div>
    </div>
  )
}

export default App
