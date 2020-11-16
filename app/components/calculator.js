import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    // ember js component already gets a surrounding div
    classNames: ['calculator-container'],

    // internal object properties of the component object
    firstNo: null,
    secondNo: null,
    ans: null,
    operation: '+',
    isAnsVisible: true,

    didReceiveAttrs() {
        // calls the component class didReceiveAttrs
        this._super(...arguments);

        // ur own code

        // input attribute passed to the component
        const sampleCalcData = this.sampleCalcData;
        const { firstNo, secondNo, ans } = sampleCalcData;

        // setting it on the internal properties of the compoennt
        this.set('firstNo', firstNo);
        this.set('secondNo', secondNo);
        this.set('ans', ans);
    },

    // this property of the component depends upon the other properties (firstNo, secondNo) of the component
    // computed property. Its value will be computed on the basis of whatever is the value of firstNo and secondNo
    isCalcDisabled: computed('firstNo', 'secondNo', function () {
        const firstNo = this.firstNo;
        const secondNo = this.secondNo;

        return !firstNo || isNaN(parseInt(firstNo)) || !secondNo || isNaN(parseInt(secondNo));
    }),

    actions: {
        cleanAns() {
            this.set('isAnsVisible', false);
        },

        // can have many action functions that can be defined over here
        onCalculate() {
            const firstNo = parseInt(this.firstNo);
            const secondNo = parseInt(this.secondNo);
            const operation = this.operation;

            let ans;
            if (operation === '+') {
                ans = firstNo + secondNo;
            } else if (operation === '-') {
                ans = firstNo - secondNo;
            } else {
                ans = firstNo * secondNo;
            }

            this.set('isAnsVisible', true);
            // if changing the property of a component that is binded with any of the gui elements,
            // then use the set method on the component object. Avoid doing direct property setting
            // this.ans = ans // avoid this!!!!
            this.set('ans', ans);
        },

        onOperationChange(operation) {
            // no need of set function, as there is no gui element dependent on the operation property of the component
            // this.operation = operation;

            this.set('operation', operation);
        }
    }
});
