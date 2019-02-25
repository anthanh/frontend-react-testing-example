import React from 'react'
import { shallow } from 'enzyme';
import IbanInput from '.';


describe('IbanInput', () => {

  it('renders as expected', () => {
    const rendered = shallow(<IbanInput></IbanInput>)
    expect(rendered.html()).toMatchSnapshot()
    expect(rendered.contains(<label htmlFor="iban">IBAN</label>)).toBe(true)
    expect(rendered.find('TextField')).toHaveLength(1)
  })

})
