// integrity session's part 
import * as mathTools from "./mathutils.js";
import constant from "./contants.js";
console.log(mathTools.add(5,10),mathTools.sub(16,6),"the constant :"+constant,mathTools.default(constant,100));
//barrel import
import { button,header } from "./components/index.js";
console.log(button(),header());
// quiz stroke 
import { value, increment } from './helper.js';
console.log(value); // Output: 1
increment();        // Humne wahan ja kar value barha di
console.log(value); // AB KYA HOGA?