const multiLib=require("multi-lib/wrapper");
const multi=multiLib.extend(GenericCrafter,GenericCrafter.GenericCrafterEntity,"multi",{
},
{
  output:[
    [["yem-copper-gear",1],null,null,null,null],
    [["yem-copper-plate",1],null,null,null,null],
    [["yem-copper-tube",1],null,null,null,null],
  ],
  input:[
    [["copper",2],null,null,null,null],
    [["copper",3],null,null,null,null],
    [["copper",2],null,null,null,null],
  ],
  craftTimes:[120,180,180]
});
multi.itemCapacity= 30;
multi.liquidCapacity= 20;
multi.size= 2;
multi.health= 100;
multi.craftEffect= Fx.pulverizeMedium;
multi.updateEffect=Fx.none;
multi.requirements(Category.crafting,ItemStack.with(Items.copper,50));
