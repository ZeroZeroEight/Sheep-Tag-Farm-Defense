
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Image Enter
//===========================================================================
const Trig_Image_Enter_Conditions = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "E00G" ) ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitIllusionBJ( GetTriggerUnit() ) === true ) ) ) {

		return false;

	}


	if ( ( ! ( ( CountPlayersInForceBJ( udg_Sheep ) + CountPlayersInForceBJ( udg_Spirit ) ) === 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Image_Enter_Actions = (): void => {

	SetUnitMoveSpeed( GetTriggerUnit(), 340 )

};


//===========================================================================
const InitTrig_Image_Enter = (): void => {

	gg_trg_Image_Enter = CreateTrigger();
	DisableTrigger( gg_trg_Image_Enter )
	TriggerRegisterEnterRectSimple( gg_trg_Image_Enter, GetEntireMapRect() )
	TriggerAddCondition( gg_trg_Image_Enter, Condition( Trig_Image_Enter_Conditions ) )
	TriggerAddAction( gg_trg_Image_Enter, Trig_Image_Enter_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Image_Enter();

} );
