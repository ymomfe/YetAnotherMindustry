const multiLib=require("multi-lib/wrapper");
const multi2=multiLib.extend(GenericCrafter,GenericCrafter.GenericCrafterEntity,"multi2",{
},
{
  output:[
    [["yem-conveyor",1],null,null,null,null],
    [["yem-duo-turret",1],null,null,null,null],
  ],
  input:[
    [["yem-copper-gear",1],["copper",1],null,null,null],
    [["yem-duo-turret-gun",1],["yem-copper-plate",10],null,null,null],
  ],
  craftTimes:[120,180]
});


multi2.itemCapacity= 30;
multi2.liquidCapacity= 20;
multi2.size= 2;
multi2.health= 100;
multi2.craftEffect= Fx.pulverizeMedium;
multi2.updateEffect=Fx.none;
multi2.requirements(Category.crafting,ItemStack.with(Items.copper,50));
