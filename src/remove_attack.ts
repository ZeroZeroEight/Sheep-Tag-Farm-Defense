
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Remove Attack
//===========================================================================
const Trig_Remove_Attack_Conditions = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "u000" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Remove_Attack_Actions = (): void => {

	BlzUnitDisableAbility( GetTriggerUnit(), FourCC( "Aatk" ), false, true )

};


//===========================================================================
const InitTrig_Remove_Attack = (): void => {

	gg_trg_Remove_Attack = CreateTrigger();
	TriggerRegisterEnterRectSimple( gg_trg_Remove_Attack, GetEntireMapRect() )
	TriggerAddCondition( gg_trg_Remove_Attack, Condition( Trig_Remove_Attack_Conditions ) )
	TriggerAddAction( gg_trg_Remove_Attack, Trig_Remove_Attack_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Remove_Attack();

} );
