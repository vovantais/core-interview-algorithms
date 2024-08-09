const assert = require('assert');
const tasks = require('../src/10-trees');
it.optional = require('../extensions/it-optional');

const testCase = {
  id: '677b8e55-2727-b1ea-44ad-f25ecc0bfdaf',
  name: 'Boarding.BoardingRequest',
  qty: 1,
  products: [
    {
      id: '2c8580e4-c099-4cb0-a0f3-773a806e2a54',
      name: 'Boarding.AccountInfo',
      qty: 1,
      products: [
        {
          id: '420628c0-7c01-4a42-8e20-ef3640e2bcde',
          name: 'Boarding.LegalAddressEditable',
          qty: 1,
          products: [
            {
              id: '420628c0-7c01-4a42-8e20-ef3640e2cdef',
              name: 'Boarding.LegalAddressEditable.One',
              qty: 1,
              products: [],
            },
            {
              id: '420628c0-7c01-4a42-8e20-ef3640e2defg',
              name: 'Boarding.LegalAddressEditable.Two',
              qty: 1,
              products: [],
            },
          ],
        },
        {
          id: '29400f1d-bb2b-4537-8ad6-501d17abdbf1',
          name: 'Boarding.LegalNameEditable',
          qty: 1,
          products: [],
        },
      ],
    },
    {
      id: 'b922c715-e5cd-43b4-b72c-2d8e9953af4f',
      name: 'Boarding.MerchantProfile',
      qty: 1,
      products: [
        {
          id: '6885ace4-6e11-4d1b-a948-8848ce175e55',
          name: 'Boarding.SiteInspection',
          qty: 1,
          products: [],
        },
        {
          id: '87c1897c-6afa-4e36-8d53-74042b2f5aa0',
          name: 'Boarding.PCICompliance',
          qty: 1,

          products: [
            {
              id: '87c1897c-6afa-4e36-8d53-74042b2f5bb1',
              name: 'Boarding.PCICompliance.One',
              qty: 1,
              products: [],
            },
            {
              id: '87c1897c-6afa-4e36-8d53-74042b2f5bb2',
              name: 'Boarding.PCICompliance.Two',
              qty: 1,
              products: [],
            },
          ],
        },
        {
          id: '8f98c40d-1a07-4c2c-8cf2-f21ed99d3829',
          name: 'Boarding.MASHierarchy',
          qty: 1,
          products: [
            {
              id: '8f98c40d-1a07-4c2c-8cf2-f21ed99e3830',
              name: 'Boarding.MASHierarchy.One',
              qty: 1,
              products: [],
            },
          ],
        },
      ],
    },
  ],
};

describe('10-trees', () => {
  const itemFirst = {
    id: '29400f1d-bb2b-4537-8ad6-501d17abdbf1',
    name: 'Boarding.LegalNameEditable',
    qty: 1,
    products: [],
  };

  const itemSecond = {
    id: '87c1897c-6afa-4e36-8d53-74042b2f5bb1',
    name: 'Boarding.PCICompliance.One',
    qty: 1,
    products: [],
  };

  const itemThird = {
    id: '8f98c40d-1a07-4c2c-8cf2-f21ed99e3830',
    name: 'Boarding.MASHierarchy.One',
    qty: 1,
    products: [],
  };

  it.optional('Should returns object item if this id exist', () => {
    assert.deepEqual(
      tasks.findItemInTrees(itemFirst.id, testCase),
      itemFirst,
      `Expected ${itemFirst}, but actually ${tasks.findItemInTrees(itemFirst.id, testCase)}`,
    );
  });

  it.optional('Should returns object item if this id exist', () => {
    assert.deepEqual(
      tasks.findItemInTrees(itemSecond.id, testCase),
      itemSecond,
      `Expected ${itemSecond}, but actually ${tasks.findItemInTrees(itemSecond.id, testCase)}`,
    );
  });

  it.optional('Should returns object item if this id exist', () => {
    assert.deepEqual(
      tasks.findItemInTrees(itemThird.id, testCase),
      itemThird,
      `Expected ${itemThird}, but actually ${tasks.findItemInTrees(itemThird.id, testCase)}`,
    );
  });

  it.optional('Should returns object item if this id exist', () => {
    assert.notEqual(
      tasks.findItemInTrees('fdffd1212edsd', testCase),
      {},
      `Expected ${'{}'}, but actually ${tasks.findItemInTrees('fdffd1212edsd', testCase)}`,
    );
  });
});
