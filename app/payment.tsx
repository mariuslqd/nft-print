'use client';

import { 
    useForm, 
    FormspreeProvider, 
    CardElement, 
    ValidationError 
  } from '@formspree/react';
  import React, { useState, useEffect, ChangeEvent } from 'react';
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

  //new
  const canvasImageUrl = '/canvas.jpg';
  const [selectedOption, setSelectedOption] = useState("");
  const [hiddenproduct, setClassName] = useState("hidden");

const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    if (e.target.value === 'canvas') {
      setClassName("canvas");
    } else {
      setClassName("hidden");
    }
  }
  
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
        <Link href="https://buy.stripe.com/9AQbKKgs398qbPa7st">
          <button className='mt-5 gradient-button2 text-white font-bold rounded-lg animate-gradient duration-600 ease-in-out'><span>Pay <span className="crossed-out">$100</span> <span>NOW $50</span> </span></button>
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
        <input id ="name" type="text" name="name" required />
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
  <select id="product" name="product"   required onChange={handleSelectChange} >
    <option value="">Select a product</option>
    <option value="canvas">Canvas 12″/30cm $50</option>
  </select>
  <ValidationError errors={state.errors} />
</div>
<div className={hiddenproduct}>
<img src={canvasImageUrl} alt="Canvas product image"  width={148} height={148} />
        </div>
<div>
  <label htmlFor="twitter">Twitter</label>
  <input id="twitter" type="text" name="twitter" placeholder="@username" />
  <ValidationError errors={state.errors} />
</div>
<div>
  <label htmlFor="instagram">Instagram</label>
  <input id="instagram" type="text" name="instagram" placeholder="@username" />
  <ValidationError errors={state.errors} />
  </div>
  <div>
  <label htmlFor="linkedin">Linkedin</label>
  <input id="linkedin" type="text" name="linkedin" placeholder="URL" />
  <ValidationError errors={state.errors} />
</div>

<div>
              <button type="submit" disabled={state.submitting} className=" mt-2 gradient-button2 text-white font-bold rounded-lg animate-gradient duration-600 ease-in-out">
              {state.submitting ? 'Submitting...' : 'Submit' }
        </button>
        </div>
    </form>
    </div>
  )
}