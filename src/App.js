import Paragraph from "./paragraph";
import {Button} from "./button";

function App() {
    return (
        <div>
            <p>Hello World</p>
            <Paragraph text={'Jasmine Rocks!'}/>
            <Paragraph text={'Jeff Rocks!'}/>
            <Paragraph text={'I love JavaScript too much!'}/>
            <Paragraph text={'Super excited'}/>
            <Button buttonText={'Click Me!'} onClickFunction={() => alert('You clicked this button!')}/>
            <Button buttonText={'Click the other one'} onClickFunction={() => console.log('You clicked the second button.')}/>
        </div>
    );
}

export default App;
