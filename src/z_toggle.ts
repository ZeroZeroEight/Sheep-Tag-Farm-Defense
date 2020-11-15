
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Z Toggle
//===========================================================================
const Trig_Z_Toggle_Conditions = (): boolean => {


	if ( ( ! ( GetSpellAbilityId() === FourCC( "A00I" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Z_Toggle_Func002001 = (): boolean => {

	return ( udg_EscToggle[ GetConvertedPlayerId( GetTriggerPlayer() ) ] === true );

};


const Trig_Z_Toggle_Func003001 = (): boolean => {

	return ( udg_EscToggle[ GetConvertedPlayerId( GetTriggerPlayer() ) ] === true );

};


const Trig_Z_Toggle_Actions = (): void => {


	if ( ( ( udg_EscToggle[ GetConvertedPlayerId( GetTriggerPlayer() ) ] === true ) ) ) {

		LeaderboardDisplayBJ( false, PlayerGetLeaderboardBJ( GetTriggerPlayer() ) )

	} else {

		LeaderboardDisplayBJ( true, PlayerGetLeaderboardBJ( GetTriggerPlayer() ) )

	}


	if ( ( ( udg_EscToggle[ GetConvertedPlayerId( GetTriggerPlayer() ) ] === true ) ) ) {

		udg_EscToggle[ GetConvertedPlayerId( GetTriggerPlayer() ) ] = false;

	} else {

		udg_EscToggle[ GetConvertedPlayerId( GetTriggerPlayer() ) ] = true;

	}

	TriggerSleepAction( 0 )
	UnitRemoveBuffBJ( FourCC( "B001" ), GetTriggerUnit() )

};


//===========================================================================
const InitTrig_Z_Toggle = (): void => {

	gg_trg_Z_Toggle = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ( gg_trg_Z_Toggle, EVENT_PLAYER_UNIT_SPELL_EFFECT )
	TriggerAddCondition( gg_trg_Z_Toggle, Condition( Trig_Z_Toggle_Conditions ) )
	TriggerAddAction( gg_trg_Z_Toggle, Trig_Z_Toggle_Actions )

};


addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Z_Toggle();

} );
