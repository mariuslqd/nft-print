'use client';

import { 
    useForm, 
    FormspreeProvider, 
    CardElement, 
    ValidationError 
  } from '@formspree/react';
  import React, { useState, useEffect } from 'react';
  import Link from 'next/link'
  import { useSearchParams } from 'next/navigation';
  import { getNftMetadata } from "../providers/anker";

  async function getNftImageUrl(address: string, tokenId: string) {
    const res = await getNftMetadata(address, tokenId);
    return res.attributes?.imageUrl ?? ""
  }

  const useOptions = () => {
    const options = React.useMemo(
      () => ({
        style: {
          base: {
            color: '#292d47',
            letterSpacing: '0.025em',
            '::placeholder': {
              color: '#50575e',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }),
      []
    );

    return options;
};

export default function SignupForm() {
  const options = useOptions()
  const [state, handleSubmit] = useForm('mnqyqove');
  const searchParams = useSearchParams();
  const address = searchParams.get('address')!;
  const tokenId = searchParams.get('tokenId')!;
  const [nftUrl, setNftUrl] = useState("");


  
  useEffect(() => {
    async function getData() {
      const result = await getNftImageUrl(address, tokenId);

      setNftUrl(result);
    }

    getData();
  }, []);
  


  if (state.succeeded) {
    return (
      <div className='text-black font-bold text-lg '>
        We received your details!
        <Link href="https://buy.stripe.com/7sIcOOa3FgAS7yU3cc">
          <button className='mt-5 gradient-button2 text-white font-bold rounded-lg animate-gradient duration-600 ease-in-out'><span>Pay <span className="crossed-out">$90</span> <span>NOW $45</span> </span></button>
        </Link>
      </div>
    );
  }

  return (
    <div className='text-black font-bold formfield'>
    <form onSubmit={handleSubmit}>
        <div>
        <input type="hidden" name="Contract" value= {address + '&' + tokenId}/>
        </div>
        <div>
      <input type="hidden" name="imageUrl" value={nftUrl} />
  </div>
  <div>
        <label htmlFor="name">Nickname</label>
        <input id ="name" type="text" name="name" required/>
        <ValidationError errors={state.errors} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required/>
        <ValidationError errors={state.errors} />
      </div>
      <div>
  <label htmlFor="country">Country</label>
  <select id="country" name="country" required>
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="albania">Albania</option>
    <option value="andorra">Andorra</option>
    <option value="austria">Austria</option>
    <option value="belgium">Belgium</option>
    <option value="bosnia">Bosnia and Herzegovina</option>
    <option value="bulgaria">Bulgaria</option>
    <option value="croatia">Croatia</option>
    <option value="cyprus">Cyprus</option>
    <option value="czech">Czech Republic</option>
    <option value="denmark">Denmark</option>
    <option value="estonia">Estonia</option>
    <option value="finland">Finland</option>
    <option value="france">France</option>
    <option value="uk">United Kingdom</option>
    <option value="germany">Germany</option>
    <option value="greece">Greece</option>
    <option value="hungary">Hungary</option>
    <option value="iceland">Iceland</option>
    <option value="italy">Italy</option>
    <option value="ireland">Ireland</option>
    <option value="latvia">Latvia</option>
    <option value="liechtenstein">Liechtenstein</option>
    <option value="lithuania">Lithuania</option>
    <option value="luxembourg">Luxembourg</option>
    <option value="macedonia">North Macedonia</option>
    <option value="malta">Malta</option>
    <option value="moldova">Moldova</option>
    <option value="monaco">Monaco</option>
    <option value="montenegro">Montenegro</option>
    <option value="netherlands">Netherlands</option>
    <option value="norway">Norway</option>
    <option value="poland">Poland</option>
    <option value="portugal">Portugal</option>
    <option value="romania">Romania</option>
    <option value="russia">Russia</option>
    <option value="san_marino">San Marino</option>
    <option value="serbia">Serbia</option>
    <option value="slovakia">Slovakia</option>
    <option value="slovenia">Slovenia</option>
    <option value="spain">Spain</option>
    <option value="sweden">Sweden</option>
    <option value="switzerland">Switzerland</option>
    <option value="ukraine">Ukraine</option>
    <option value="vatican_city">Vatican City</option>
  </select>
  <ValidationError errors={state.errors} />
</div>
<div>
  <label htmlFor="product">Product</label>
  <select id="product" name="product" required>
    <option value="">Select a product</option>
    <option value="canvas">Canvas 12″/30cm $45</option>
  </select>
  <ValidationError errors={state.errors} />
</div>
<div>
  <label htmlFor="twitter">Twitter</label>
  <input id="twitter" type="text" name="twitter" placeholder="@username" />
  <ValidationError errors={state.errors} />
</div>
<div>
  <label htmlFor="twitter">Instagram</label>
  <input id="twitter" type="text" name="twitter" placeholder="@username" />
  <ValidationError errors={state.errors} />
  <div>
  <label htmlFor="twitter">Linkedin</label>
  <input id="twitter" type="text" name="twitter" placeholder="@username" />
  <ValidationError errors={state.errors} />
</div>
</div>
<div>
      {/* <button className="mt-4 gradient-button2 text-white font-bold rounded-lg animate-gradient duration-600 ease-in-out" type="submit" disabled={state.submitting}>
        {state.submitting ? 'Processing payment...' : <span>Pay <span className="crossed-out">$90</span> <span>NOW $45</span> </span>}
      </button> */}
              <button type="submit" disabled={state.submitting} className="mt-4 gradient-button2 text-white font-bold rounded-lg animate-gradient duration-600 ease-in-out">
              {state.submitting ? 'Submitting...' : 'Submit' }
        </button>
        </div>
    </form>
    </div>
  )
}