import React from 'react';
import { describe, expect, it, test } from "vitest";

import { render,screen, waitFor } from "@testing-library/react";

const Sum = (a, b) =>{
    return a + b;
}

describe('Sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect (Sum(1, 3)).toBe(4);
    });
});



/*
 full stack
 hydrabad 
 node, react
 30-45

 masterworks.
 friday-thusday


 




*/

