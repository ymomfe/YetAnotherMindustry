const multiLib=require("multi-lib/wrapper");
const multi3=multiLib.extend(GenericCrafter,GenericCrafter.GenericCrafterEntity,"multi3",{
},
{
  output:[
    [["yem-duo-turret-gun",1],null,null,null,null],
  ],
  input:[
    [["yem-copper-gear",5],["yem-copper-plate",5],["yem-copper-tube",2],null,1],
  ],
  craftTimes:[300]
});
multi3.itemCapacity= 30;
multi3.liquidCapacity= 20;
multi3.size= 2;
multi3.health= 100;
multi3.craftEffect= Fx.pulverizeMedium;
multi3.updateEffect=Fx.none;
multi3.requirements(Category.crafting,ItemStack.with(Items.copper,50));
