

import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Sheep Revive
//===========================================================================
const Trig_Sheep_Revive_Conditions = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "e002" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Sheep_Revive_Actions = (): void => {

	udg_TempPoint = GetUnitLoc( GetTriggerUnit() );
	AddSpecialEffectLocBJ( udg_TempPoint, "Units\\NightElf\\Wisp\\WispExplode.mdl" )
	RemoveLocation( udg_TempPoint )
	ForceAddPlayerSimple( GetTriggerPlayer(), udg_Sheep )
	ForceRemovePlayerSimple( GetTriggerPlayer(), udg_Spirit )
	udg_TempPoint = GetPlayerStartLocationLoc( ForcePickRandomPlayer( udg_SaveGroup ) );
	CreateNUnitsAtLoc( 1, FourCC( "u000" ), GetTriggerPlayer(), udg_TempPoint, bj_UNIT_FACING )
	SelectUnitForPlayerSingle( GetLastCreatedUnit(), GetTriggerPlayer() )
	PanCameraToTimedLocForPlayer( GetTriggerPlayer(), udg_TempPoint, 0 )
	RemoveLocation( udg_TempPoint )
	ConditionalTriggerExecute( gg_trg_Leaderboard )
	TriggerSleepAction( 0.5 )
	RemoveUnit( GetTriggerUnit() )

};


//===========================================================================
const InitTrig_Sheep_Revive = (): void => {

	gg_trg_Sheep_Revive = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ( gg_trg_Sheep_Revive, EVENT_PLAYER_UNIT_DEATH )
	TriggerAddCondition( gg_trg_Sheep_Revive, Condition( Trig_Sheep_Revive_Conditions ) )
	TriggerAddAction( gg_trg_Sheep_Revive, Trig_Sheep_Revive_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Sheep_Revive();

} );
