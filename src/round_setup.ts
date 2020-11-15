
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Round Setup
//===========================================================================
const Trig_Round_Setup_Actions = (): void => {

	udg_RoundRegion[ 1 ] = gg_rct_Round_1;
	udg_RoundRegion[ 2 ] = gg_rct_Round_2;
	udg_RoundRegion[ 3 ] = gg_rct_Round_3a;
	udg_RoundRegion[ 4 ] = gg_rct_Round_4;
	udg_RoundRegion[ 5 ] = gg_rct_Round_5;
	udg_RoundRegion[ 6 ] = gg_rct_Round_6;
	udg_RoundRegion[ 7 ] = gg_rct_Round_7;
	udg_RoundRegion[ 8 ] = gg_rct_Round_8;
	udg_RoundRegion[ 9 ] = gg_rct_Round_9;
	udg_RoundRegion[ 10 ] = gg_rct_Round_10;
	udg_RoundRegion[ 11 ] = gg_rct_Round_11;
	udg_RoundRegion[ 12 ] = gg_rct_Round_12;
	udg_RoundRegion[ 13 ] = gg_rct_Round_13;
	udg_RoundRegion[ 14 ] = gg_rct_Round_14;
	udg_RoundRegion[ 15 ] = gg_rct_Round_15;
	udg_RoundRegion[ 16 ] = gg_rct_Round_16;
	udg_RoundRegion[ 17 ] = gg_rct_Round_17;

};


//===========================================================================
const InitTrig_Round_Setup = (): void => {

	gg_trg_Round_Setup = CreateTrigger();
	TriggerAddAction( gg_trg_Round_Setup, Trig_Round_Setup_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Round_Setup();
  

} );

addScriptHook( W3TS_HOOK.MAIN_INIT, (): void => {

  ConditionalTriggerExecute(gg_trg_Round_Setup)

} );

