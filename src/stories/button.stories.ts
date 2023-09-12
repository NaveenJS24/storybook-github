import { userEvent, within } from '@storybook/testing-library';
import {expect} from '@storybook/jest';

/** Hello */

export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Components/Button',
    tags: ['autodocs'],
    argTypes: {
      onClickTask: { action: 'onClickTask' },
    },
}


const Template = (args) => `<div><my-button role="button" name="button" data-testid="btn" class="${args.variant ? 'storybook-button--primary':'storybook-button--secondary'}" size=${args.size} >${args.label}</my-button>
<my-alert data-testid ="alt">alert</my-alert>
</div>`;
// const TestTemplate = () => `<my-alert name="btn" data-testid="alt"  > alert</my-alert>`;

export const Default = Template.bind({});
// Default.args = {
//   label: 'button',
//   size: 'medium'
// };
Default.argTypes = {
    size: {
          control: 'select',
          options: [
            'small', 
            'medium', 
            'large'
          ]
    },
    className:{
      name:'stort',
      description: 'This is a varaiant',
      option:['storybook-button'],
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      description: 'This is a varaiant',
    },
    
    label:{
      control: 'text',
      value:'storybook-button',
    },
  
    
};




/** Primary Button */
export const Primary = Template.bind({});
Primary.args = {
  class:'storybook-button',
  primary: true,
  label: 'button',
};
Primary.parameters = {
    backgrounds:{
        values:[
            {name:"black", value: '#000'},
            {name:"red", value: '#f00'},
            {name:"blue", value: '#00f'}
        ]
    },
    // controls: {
    //   expanded: true
    // }
};
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonExample = await canvas.queryByTestId('btn');

  // See https://storybook.js.org/docs/web-components/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(buttonExample);
  console.log(canvas.getByText('alert'));
  await expect(canvas.queryByTestId('alt')).toBeInTheDocument();
}





