'use client';

import { Suspense } from 'react';
import CartPageContent from './CartPageContent';

const CartWrapper = () => {
  return (
    <Suspense fallback={<div>Loading cart...</div>}>
      <CartPageContent />
    </Suspense>
  );
};

export default CartWrapper;