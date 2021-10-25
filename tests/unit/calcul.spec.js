import { mount } from '@vue/test-utils'
import Calculator from "../../src/components/Calculator";



describe('Calculator input tests', () => {
    it('Test operand1 input value', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[value=operand1]')
        operand1Input.setValue('1')

        expect(wrapper.vm.operand1).toBe(1)
    })

    it('Test operand2 input value', async () => {
        const wrapper = mount(Calculator)

        const operand2Input = wrapper.find('input[value=operand2]')
        operand2Input.setValue('1')

        expect(wrapper.vm.operand2).toBe(1)
    })
})
describe('Calculator operations tests', () => {
    it('Test sum operation', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[value=operand1]')
        operand1Input.setValue('100')

        const operand2Input = wrapper.find('input[value=operand2]')
        operand2Input.setValue('5')

        const sumOperationButton = wrapper.find('button[value="+"]')
        sumOperationButton.trigger('click')

        expect(wrapper.vm.result).toBe(105)
    })
})
describe('Calculator operations tests', () => {
    it('Test subtraction operation', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[value=operand1]')
        operand1Input.setValue('100')

        const operand2Input = wrapper.find('input[value=operand2]')
        operand2Input.setValue('5')

        const subtractionOperationButton = wrapper.find('button[value="-"]')
        subtractionOperationButton.trigger('click')

        expect(wrapper.vm.result).toBe(95)
    })
})
describe('Calculator operations tests', () => {
    it('Test division operation', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[value=operand1]')
        operand1Input.setValue('100')

        const operand2Input = wrapper.find('input[value=operand2]')
        operand2Input.setValue('5')

        const divisionOperationButton = wrapper.find('button[value="/"]')
        divisionOperationButton.trigger('click')

        expect(wrapper.vm.result).toBe(20)
    })
})
describe('Calculator operations tests', () => {
    it('Test multiplication operation', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[value=operand1]')
        operand1Input.setValue('100')

        const operand2Input = wrapper.find('input[value=operand2]')
        operand2Input.setValue('5')

        const multiplicationOperationButton = wrapper.find('button[value="*"]')
        multiplicationOperationButton.trigger('click')

        expect(wrapper.vm.result).toBe(500)
    })
})
describe('Calculator operations tests', () => {
    it('Test extent operation', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[value=operand1]')
        operand1Input.setValue('3')

        const operand2Input = wrapper.find('input[value=operand2]')
        operand2Input.setValue('2')

        const extentOperationButton = wrapper.find('button[value="**"]')
        extentOperationButton.trigger('click')

        expect(wrapper.vm.result).toBe(9)
    })
})
describe('Calculator operations tests', () => {
    it('Test remainder operation', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[value=operand1]')
        operand1Input.setValue('3')

        const operand2Input = wrapper.find('input[value=operand2]')
        operand2Input.setValue('2')

        const remainderOperationButton = wrapper.find('button[value="%"]')
        remainderOperationButton.trigger('click')

        expect(wrapper.vm.result).toBe(1)
    })
})
describe('Calculator keybordValue test', () => {
    it('Test keybordValue', async () => {
        const wrapper = mount(Calculator)

        const keybordValue = wrapper.find('button[value="1"]')
        keybordValue.trigger('click')
        if(keybordValue){
            const operand1Input = wrapper.find('input[value=operand1]')
            operand1Input.setValue('keybordValue')
        }

        expect(wrapper.vm.operand1).toBe('keybordValue')
    })
    it('Test keybordValue2', async () => {
        const wrapper = mount(Calculator)

        const keybordValue = wrapper.find('button[value="1"]')
        keybordValue.trigger('click')
        if(keybordValue){
            const operand2Input = wrapper.find('input[value=operand2]')
            operand2Input.setValue('keybordValue')
        }
        expect(wrapper.vm.operand2).toBe('keybordValue')
    })

})
describe('Test delete',()=>{
    it('delete operand',async ()=>{
        const wrapper = mount(Calculator)
        const findButtonByText = (text) =>
            wrapper.findAll('button').wrappers.find(w => {
                return w.text() === text
            })
        const operand1 = wrapper.find('[data-test=operand1]')
        await operand1.setValue('10')
        await findButtonByText('←').trigger('click')
        expect(wrapper.vm.operand1).toBe('1')

    })



})
