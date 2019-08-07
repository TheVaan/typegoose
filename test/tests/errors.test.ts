import { assert, expect } from 'chai';

import { NoMetadataError, NotAllElementsError, NotNumberTypeError, NotStringTypeError } from '../../src/errors';
import { pre } from '../../src/hooks';
import { prop } from '../../src/prop';

// disable "no-unused-variable" for this file, because it tests for errors
// tslint:disable:no-unused-variable

/**
 * Function to pass into describe
 * ->Important: you need to always bind this
 * @example
 * ```
 * import { suite as ErrorTests } from './errors.test'
 * ...
 * describe('Test if the correct errors are returned', ErrorTests.bind(this));
 * ...
 * ```
 */
export function suite() {
  it('should error if type is not string and a transform is supplied [NotStringTypeError]', () => {
    try {
      class TEST {
        @prop({ lowercase: true })
        public test: number;
      }
      assert.fail('Expected to throw "NotStringTypeError"');
    } catch (err) {
      expect(err).to.be.an.instanceOf(NotStringTypeError);
    }
  });

  it('should error if type is not string and a validate is supplied [NotStringTypeError]', () => {
    try {
      class TEST {
        @prop({ maxlength: 10 })
        public test: number;
      }
      assert.fail('Expected to throw "NotStringTypeError"');
    } catch (err) {
      expect(err).to.be.an.instanceOf(NotStringTypeError);
    }
  });

  it('should error if type is not number and a validate is supplied [NotNumberTypeError]', () => {
    try {
      class TEST {
        @prop({ max: 10 })
        public test: string;
      }
      assert.fail('Expected to throw "NotNumberTypeError"');
    } catch (err) {
      expect(err).to.be.an.instanceOf(NotNumberTypeError);
    }
  });

  it('should error if an non-existing(runtime) type is given [NoMetadataError]', () => {
    try {
      class TEST {
        @prop()
        public test: undefined;
      }
      assert.fail('Expected to throw "InvalidPropError"');
    } catch (err) {
      expect(err).to.be.an.instanceOf(NoMetadataError);
    }
  });

  it('should error if no function for hooks is defined [TypeError]', () => {
    try {
      // ignore that it is not written right, it should be tested so
      // @ts-ignore
      @pre<Test>('')
      class TEST {
        @prop()
        public test: string;
      }
      assert.fail('Expected to throw "TypeError"');
    } catch (err) {
      expect(err).to.be.an.instanceOf(TypeError);
      expect((err as TypeError).message).to.be.equals(`"TEST.pre."'s function is not a function!`);
    }
  });

  it('should error if no get or set function is defined for non-virtuals [TypeError]', () => {
    try {
      class TEST {
        // @ts-ignore
        @prop({ set: false })
        public test: string;
      }
      assert.fail('Expected to throw "TypeError"');
    } catch (err) {
      expect(err).to.be.an.instanceOf(TypeError);
      expect((err as TypeError).message).to.be.equals(`"TEST.test" does not have a set function!`);
    }
    try {
      class TEST {
        // @ts-ignore
        @prop({ set: () => undefined, get: false })
        public test: string;
      }
      assert.fail('Expected to throw "TypeError"');
    } catch (err) {
      expect(err).to.be.an.instanceOf(TypeError);
      expect((err as TypeError).message).to.be.equals(`"TEST.test" does not have a get function!`);
    }
  });

  it('should error if not all needed parameters for virtual-populate are given [NotAllElementsError]', async () => {
    try {
      class TEST {
        @prop({ localField: true })
        public test: string;
      }
      assert.fail('Expected to throw "NotAllElementsError"');
    } catch (err) {
      expect(err).to.be.an.instanceOf(NotAllElementsError);
    }
  });
}
