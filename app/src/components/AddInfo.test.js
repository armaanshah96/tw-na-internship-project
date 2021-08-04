import knowYourRightsService from "../services/knowYourRightsService";
import AddInfo from "./AddInfo";
import {render, waitFor, screen} from "@testing-library/react";

test("Render add-info information", async() => {
   const dummyAddInfo = {text: 'helloMock1'}


   render(<AddInfo item={dummyAddInfo}/>);

   await waitFor(() => {
       expect(screen.getByText(/helloMock1/i)).toBeInTheDocument()
   })

});