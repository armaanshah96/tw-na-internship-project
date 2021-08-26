/*
 * © 2021 Thoughtworks, Inc.
 */

import AddInfo from "./AddInfo";
import {render, screen, waitFor} from "@testing-library/react";

test("Render add-info information", async() => {
   const dummyAddInfo = {text: 'helloMock1'}


   render(<AddInfo item={dummyAddInfo}/>);

   await waitFor(() => {
       expect(screen.getByText(/helloMock1/i)).toBeInTheDocument()
   })

});