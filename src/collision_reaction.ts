
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Collision Reaction
//===========================================================================
const Trig_Collision_Reaction_Func002002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_STRUCTURE ) === true );

};


const Trig_Collision_Reaction_Func003Func001Func002Func003C = (): boolean => {


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) === 0.57 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func003Func001Func002Func004Func002C = (): boolean => {


	if ( ( ! ( udg_DamageMethod[ udg_LoopIndex ] !== 2 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_DamageMethod[ udg_LoopIndex ] !== 3 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func003Func001Func002Func004C = (): boolean => {


	if ( ( ( udg_DamageMethod[ udg_LoopIndex ] === 1 ) ) ) {

		return true;

	}


	if ( ( Trig_Collision_Reaction_Func003Func001Func002Func004Func002C() ) ) {

		return true;

	}

	return false;

};


const Trig_Collision_Reaction_Func003Func001Func002C = (): boolean => {


	if ( ( ! Trig_Collision_Reaction_Func003Func001Func002Func004C() ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func003Func001C = (): boolean => {


	if ( ( ! ( IsUnitAliveBJ( GetEnumUnit() ) === true ) ) ) {

		return false;

	}


	if ( ( ! ( udg_BuildingReaction[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitAliveBJ( udg_Missile[ udg_LoopIndex ] ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func003A = (): void => {


	if ( ( Trig_Collision_Reaction_Func003Func001C() ) ) {


		if ( ( Trig_Collision_Reaction_Func003Func001Func002C() ) ) {

			TriggerExecute( gg_trg_Damage_Method_1_And_4 )

			if ( ( Trig_Collision_Reaction_Func003Func001Func002Func003C() ) ) {

				udg_TempPoint3 = GetUnitLoc( GetEnumUnit() );
				AddSpecialEffectLocBJ( udg_TempPoint3, udg_DamageSpecialEffect[ udg_LoopIndex ] )
				DestroyEffectBJ( GetLastCreatedEffectBJ() )
				RemoveLocation( udg_TempPoint3 )

			} else {

			null

			}


		} else {

			KillUnit( udg_Missile[ udg_LoopIndex ] )

		}


	} else {

	null

	}


};


const Trig_Collision_Reaction_Func006Func001Func003Func002C = (): boolean => {


	if ( ( ! ( udg_DamageMethod[ udg_LoopIndex ] !== 2 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_DamageMethod[ udg_LoopIndex ] !== 3 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func006Func001Func003C = (): boolean => {


	if ( ( ( udg_DamageMethod[ udg_LoopIndex ] === 1 ) ) ) {

		return true;

	}


	if ( ( Trig_Collision_Reaction_Func006Func001Func003Func002C() ) ) {

		return true;

	}

	return false;

};


const Trig_Collision_Reaction_Func006Func001C = (): boolean => {


	if ( ( ! Trig_Collision_Reaction_Func006Func001Func003C() ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func006Func003Func001C = (): boolean => {


	if ( ( ! ( udg_BoundaryReaction[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( IsTerrainPathableBJ( udg_TempPoint2, PATHING_TYPE_FLYABILITY ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func006Func003Func002C = (): boolean => {


	if ( ( ! ( udg_TerrainReaction[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( IsTerrainPathableBJ( udg_TempPoint2, PATHING_TYPE_WALKABILITY ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func006Func003C = (): boolean => {


	if ( ( Trig_Collision_Reaction_Func006Func003Func001C() ) ) {

		return true;

	}


	if ( ( Trig_Collision_Reaction_Func006Func003Func002C() ) ) {

		return true;

	}

	return false;

};


const Trig_Collision_Reaction_Func006C = (): boolean => {


	if ( ( ! ( IsUnitAliveBJ( udg_Missile[ udg_LoopIndex ] ) === true ) ) ) {

		return false;

	}


	if ( ( ! Trig_Collision_Reaction_Func006Func003C() ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func007Func001Func001Func004Func002C = (): boolean => {


	if ( ( ! ( udg_DamageMethod[ udg_LoopIndex ] !== 2 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_DamageMethod[ udg_LoopIndex ] !== 3 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func007Func001Func001Func004C = (): boolean => {


	if ( ( ( udg_DamageMethod[ udg_LoopIndex ] === 1 ) ) ) {

		return true;

	}


	if ( ( Trig_Collision_Reaction_Func007Func001Func001Func004Func002C() ) ) {

		return true;

	}

	return false;

};


const Trig_Collision_Reaction_Func007Func001Func001C = (): boolean => {


	if ( ( ! Trig_Collision_Reaction_Func007Func001Func001Func004C() ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func007Func001C = (): boolean => {


	if ( ( ! ( IsDestructableAliveBJ( GetEnumDestructable() ) === true ) ) ) {

		return false;

	}


	if ( ( ! ( udg_TreeReaction[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( GetDestructableTypeId( GetEnumDestructable() ) !== FourCC( "YTpb" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func007A = (): void => {


	if ( ( Trig_Collision_Reaction_Func007Func001C() ) ) {


		if ( ( Trig_Collision_Reaction_Func007Func001Func001C() ) ) {

			TriggerExecute( gg_trg_Damage_Method_1_And_4 )
			SetDestructableLife( GetEnumDestructable(), ( GetDestructableLife( GetEnumDestructable() ) - udg_Damage[ udg_LoopIndex ] ) )

		} else {

			KillUnit( udg_Missile[ udg_LoopIndex ] )

		}


	} else {

	null

	}


};


const Trig_Collision_Reaction_Func009Func001Func002Func001Func001C = (): boolean => {


	if ( ( ! ( udg_TerrainReaction[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( IsTerrainPathableBJ( udg_TempPoint3, PATHING_TYPE_WALKABILITY ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func002Func001Func002C = (): boolean => {


	if ( ( ! ( udg_BoundaryReaction[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( IsTerrainPathableBJ( udg_TempPoint3, PATHING_TYPE_FLYABILITY ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func002Func001C = (): boolean => {


	if ( ( Trig_Collision_Reaction_Func009Func001Func002Func001Func001C() ) ) {

		return true;

	}


	if ( ( Trig_Collision_Reaction_Func009Func001Func002Func001Func002C() ) ) {

		return true;

	}

	return false;

};


const Trig_Collision_Reaction_Func009Func001Func002Func002C = (): boolean => {


	if ( ( ! ( udg_HorizontalArc[ udg_LoopIndex ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func002Func005Func003C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 5 ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) >= 180 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func002Func005Func008C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 5 ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) >= 180 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func002Func005Func010C = (): boolean => {


	if ( ( ( GetForLoopIndexA() === 1 ) ) ) {

		return true;

	}


	if ( ( ( GetForLoopIndexA() === 3 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Collision_Reaction_Func009Func001Func002Func005C = (): boolean => {


	if ( ( ! Trig_Collision_Reaction_Func009Func001Func002Func005Func010C() ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func002C = (): boolean => {


	if ( ( ! Trig_Collision_Reaction_Func009Func001Func002Func001C() ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func003Func001Func003Func003C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 5 ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) >= 180 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func003Func001Func003Func008C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 5 ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) >= 180 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func003Func001Func003Func011C = (): boolean => {


	if ( ( ( GetForLoopIndexA() === 1 ) ) ) {

		return true;

	}


	if ( ( ( GetForLoopIndexA() === 3 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Collision_Reaction_Func009Func001Func003Func001Func003C = (): boolean => {


	if ( ( ! Trig_Collision_Reaction_Func009Func001Func003Func001Func003Func011C() ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func003Func001C = (): boolean => {


	if ( ( ! ( IsDestructableAliveBJ( GetEnumDestructable() ) === true ) ) ) {

		return false;

	}


	if ( ( ! ( udg_TreeReaction[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( GetDestructableTypeId( GetEnumDestructable() ) !== FourCC( "YTpb" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func003A = (): void => {


	if ( ( Trig_Collision_Reaction_Func009Func001Func003Func001C() ) ) {

		udg_HorizontalArc[ udg_LoopIndex ] = 0;
		udg_VerticalArc[ udg_LoopIndex ] = ( udg_VerticalArc[ udg_LoopIndex ] / 2 );

		if ( ( Trig_Collision_Reaction_Func009Func001Func003Func001Func003C() ) ) {

			udg_Angle[ udg_LoopIndex ] = ( 0 - udg_Angle[ udg_LoopIndex ] );
			udg_StartPoint[ udg_LoopIndex ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );

			if ( ( Trig_Collision_Reaction_Func009Func001Func003Func001Func003Func008C() ) ) {

				udg_Distance[ udg_LoopIndex ] = ( 10 * udg_Speed[ udg_LoopIndex ] );
				udg_Speed[ udg_LoopIndex ] = ( udg_Speed[ udg_LoopIndex ] * 0.75 );

			} else {

				udg_Distance[ udg_LoopIndex ] = ( udg_Distance[ udg_LoopIndex ] - ( udg_Distance[ udg_LoopIndex ] * ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) / 180 ) ) );

			}

			SetUnitManaBJ( udg_Missile[ udg_LoopIndex ], 0 )
			udg_HasBounced[ udg_LoopIndex ] = true;

		} else {

			udg_Angle[ udg_LoopIndex ] = ( 180 - udg_Angle[ udg_LoopIndex ] );
			udg_StartPoint[ udg_LoopIndex ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );

			if ( ( Trig_Collision_Reaction_Func009Func001Func003Func001Func003Func003C() ) ) {

				udg_Distance[ udg_LoopIndex ] = ( 10 * udg_Speed[ udg_LoopIndex ] );
				udg_Speed[ udg_LoopIndex ] = ( udg_Speed[ udg_LoopIndex ] * 0.75 );

			} else {

				udg_Distance[ udg_LoopIndex ] = ( udg_Distance[ udg_LoopIndex ] - ( udg_Distance[ udg_LoopIndex ] * ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) / 180 ) ) );

			}

			SetUnitManaBJ( udg_Missile[ udg_LoopIndex ], 0 )
			udg_HasBounced[ udg_LoopIndex ] = true;

		}


	} else {

	null

	}


};


const Trig_Collision_Reaction_Func009Func001Func004002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_STRUCTURE ) === true );

};


const Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func003C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 5 ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) >= 180 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func006Func001Func001C = (): boolean => {


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] < 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func006Func001Func003C = (): boolean => {


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func006Func001C = (): boolean => {


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func006C = (): boolean => {


	if ( ( ! ( udg_BuildingReaction[ udg_LoopIndex ] === 3 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func009C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 5 ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) >= 180 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func012Func001Func001C = (): boolean => {


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] < 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func012Func001Func003C = (): boolean => {


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func012Func001C = (): boolean => {


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func012C = (): boolean => {


	if ( ( ! ( udg_BuildingReaction[ udg_LoopIndex ] === 3 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func013C = (): boolean => {


	if ( ( ( GetForLoopIndexA() === 1 ) ) ) {

		return true;

	}


	if ( ( ( GetForLoopIndexA() === 3 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Collision_Reaction_Func009Func001Func005Func001Func003C = (): boolean => {


	if ( ( ! Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func013C() ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func005Func001Func005C = (): boolean => {


	if ( ( ( udg_BuildingReaction[ udg_LoopIndex ] === 2 ) ) ) {

		return true;

	}


	if ( ( ( udg_BuildingReaction[ udg_LoopIndex ] === 3 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Collision_Reaction_Func009Func001Func005Func001C = (): boolean => {


	if ( ( ! ( IsUnitAliveBJ( GetEnumUnit() ) === true ) ) ) {

		return false;

	}


	if ( ( ! Trig_Collision_Reaction_Func009Func001Func005Func001Func005C() ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func001Func005A = (): void => {


	if ( ( Trig_Collision_Reaction_Func009Func001Func005Func001C() ) ) {

		udg_HorizontalArc[ udg_LoopIndex ] = 0;
		udg_VerticalArc[ udg_LoopIndex ] = ( udg_VerticalArc[ udg_LoopIndex ] / 2 );

		if ( ( Trig_Collision_Reaction_Func009Func001Func005Func001Func003C() ) ) {

			udg_Angle[ udg_LoopIndex ] = ( 0 - udg_Angle[ udg_LoopIndex ] );
			udg_StartPoint[ udg_LoopIndex ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );

			if ( ( Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func009C() ) ) {

				udg_Distance[ udg_LoopIndex ] = ( 10 * udg_Speed[ udg_LoopIndex ] );
				udg_Speed[ udg_LoopIndex ] = ( udg_Speed[ udg_LoopIndex ] * 0.75 );

			} else {

				udg_Distance[ udg_LoopIndex ] = ( udg_Distance[ udg_LoopIndex ] - ( udg_Distance[ udg_LoopIndex ] * ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) / 180 ) ) );

			}

			SetUnitManaBJ( udg_Missile[ udg_LoopIndex ], 0 )
			udg_HasBounced[ udg_LoopIndex ] = true;

			if ( ( Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func012C() ) ) {


				if ( ( Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func012Func001C() ) ) {


					if ( ( Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func012Func001Func003C() ) ) {

						UnitDamageTargetBJ( udg_DamageSource[ udg_LoopIndex ], GetEnumUnit(), udg_Damage[ udg_LoopIndex ], udg_AttackType[ udg_LoopIndex ], DAMAGE_TYPE_UNIVERSAL )

					} else {

						SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) - udg_Damage[ udg_LoopIndex ] ) )

					}


				} else {


					if ( ( Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func012Func001Func001C() ) ) {

						UnitDamageTargetBJ( udg_DamageSource[ udg_LoopIndex ], GetEnumUnit(), ( udg_Damage[ udg_LoopIndex ] * - 1 ), udg_AttackType[ udg_LoopIndex ], DAMAGE_TYPE_UNIVERSAL )

					} else {

						SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) + udg_Damage[ udg_LoopIndex ] ) )

					}


				}

				AddSpecialEffectLocBJ( udg_TempPoint2, udg_DamageSpecialEffect[ udg_LoopIndex ] )
				DestroyEffectBJ( GetLastCreatedEffectBJ() )

			} else {

			null

			}


		} else {

			udg_Angle[ udg_LoopIndex ] = ( 180 - udg_Angle[ udg_LoopIndex ] );
			udg_StartPoint[ udg_LoopIndex ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );

			if ( ( Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func003C() ) ) {

				udg_Distance[ udg_LoopIndex ] = ( 10 * udg_Speed[ udg_LoopIndex ] );
				udg_Speed[ udg_LoopIndex ] = ( udg_Speed[ udg_LoopIndex ] * 0.75 );

			} else {

				udg_Distance[ udg_LoopIndex ] = ( udg_Distance[ udg_LoopIndex ] - ( udg_Distance[ udg_LoopIndex ] * ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) / 180 ) ) );

			}

			SetUnitManaBJ( udg_Missile[ udg_LoopIndex ], 0 )
			udg_HasBounced[ udg_LoopIndex ] = true;

			if ( ( Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func006C() ) ) {


				if ( ( Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func006Func001C() ) ) {


					if ( ( Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func006Func001Func003C() ) ) {

						UnitDamageTargetBJ( udg_DamageSource[ udg_LoopIndex ], GetEnumUnit(), udg_Damage[ udg_LoopIndex ], udg_AttackType[ udg_LoopIndex ], DAMAGE_TYPE_UNIVERSAL )

					} else {

						SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) - udg_Damage[ udg_LoopIndex ] ) )

					}


				} else {


					if ( ( Trig_Collision_Reaction_Func009Func001Func005Func001Func003Func006Func001Func001C() ) ) {

						UnitDamageTargetBJ( udg_DamageSource[ udg_LoopIndex ], GetEnumUnit(), ( udg_Damage[ udg_LoopIndex ] * - 1 ), udg_AttackType[ udg_LoopIndex ], DAMAGE_TYPE_UNIVERSAL )

					} else {

						SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) + udg_Damage[ udg_LoopIndex ] ) )

					}


				}

				AddSpecialEffectLocBJ( udg_TempPoint2, udg_DamageSpecialEffect[ udg_LoopIndex ] )
				DestroyEffectBJ( GetLastCreatedEffectBJ() )

			} else {

			null

			}


		}


	} else {

	null

	}


};


const Trig_Collision_Reaction_Func009Func003C = (): boolean => {


	if ( ( ( udg_TerrainReaction[ udg_LoopIndex ] === 2 ) ) ) {

		return true;

	}


	if ( ( ( udg_BoundaryReaction[ udg_LoopIndex ] === 2 ) ) ) {

		return true;

	}


	if ( ( ( udg_TreeReaction[ udg_Index ] === 2 ) ) ) {

		return true;

	}


	if ( ( ( udg_BuildingReaction[ udg_LoopIndex ] === 2 ) ) ) {

		return true;

	}


	if ( ( ( udg_BuildingReaction[ udg_LoopIndex ] === 3 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Collision_Reaction_Func009Func004C = (): boolean => {


	if ( ( ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) > ( 180 / ( udg_Distance[ udg_LoopIndex ] / udg_Speed[ udg_LoopIndex ] ) ) ) ) ) {

		return true;

	}


	if ( ( ( udg_HasBounced[ udg_LoopIndex ] === false ) ) ) {

		return true;

	}

	return false;

};


const Trig_Collision_Reaction_Func009Func005Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) >= 180 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 5 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func009Func005C = (): boolean => {


	if ( ( Trig_Collision_Reaction_Func009Func005Func001C() ) ) {

		return true;

	}


	if ( ( ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) < 180 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Collision_Reaction_Func009C = (): boolean => {


	if ( ( ! ( IsUnitAliveBJ( udg_Missile[ udg_LoopIndex ] ) === true ) ) ) {

		return false;

	}


	if ( ( ! Trig_Collision_Reaction_Func009Func003C() ) ) {

		return false;

	}


	if ( ( ! Trig_Collision_Reaction_Func009Func004C() ) ) {

		return false;

	}


	if ( ( ! Trig_Collision_Reaction_Func009Func005C() ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func010Func001002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_STRUCTURE ) === true );

};


const Trig_Collision_Reaction_Func010Func002Func001C = (): boolean => {


	if ( ( ! ( IsUnitAliveBJ( GetEnumUnit() ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Func010Func002A = (): void => {


	if ( ( Trig_Collision_Reaction_Func010Func002Func001C() ) ) {

		KillUnit( GetEnumUnit() )

	} else {

	null

	}


};


const Trig_Collision_Reaction_Func010C = (): boolean => {


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) === 0.57 ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) >= 179 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Collision_Reaction_Actions = (): void => {

	// Building = 1, destroy on contact
	udg_TempGroup = GetUnitsInRangeOfLocMatching( 100, udg_TempPoint2, Condition( Trig_Collision_Reaction_Func002002003 ) );
	ForGroupBJ( udg_TempGroup, Trig_Collision_Reaction_Func003A )
	DestroyGroup( udg_TempGroup )
	// Others = 1, destroy on contact

	if ( ( Trig_Collision_Reaction_Func006C() ) ) {


		if ( ( Trig_Collision_Reaction_Func006Func001C() ) ) {

			TriggerExecute( gg_trg_Damage_Method_1_And_4 )

		} else {

			KillUnit( udg_Missile[ udg_LoopIndex ] )

		}


	} else {

	null

	}

	EnumDestructablesInCircleBJ( 75, udg_TempPoint2, Trig_Collision_Reaction_Func007A )
	// Any = 2, bounce off and Building = 3, bounce off and damage

	if ( ( Trig_Collision_Reaction_Func009C() ) ) {

		bj_forLoopAIndex = 1;
		bj_forLoopAIndexEnd = 4;

		while ( true ) {

			if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
			udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint2, 35, ( 90 * I2R( GetForLoopIndexA() ) ) );

			if ( ( Trig_Collision_Reaction_Func009Func001Func002C() ) ) {


				if ( ( Trig_Collision_Reaction_Func009Func001Func002Func002C() ) ) {

					udg_Angle[ udg_LoopIndex ] = GetUnitFacing( udg_Missile[ udg_LoopIndex ] );

				} else {

				null

				}

				udg_HorizontalArc[ udg_LoopIndex ] = 0;
				udg_VerticalArc[ udg_LoopIndex ] = ( udg_VerticalArc[ udg_LoopIndex ] / 2 );

				if ( ( Trig_Collision_Reaction_Func009Func001Func002Func005C() ) ) {

					udg_Angle[ udg_LoopIndex ] = ( 0 - udg_Angle[ udg_LoopIndex ] );
					udg_StartPoint[ udg_LoopIndex ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );

					if ( ( Trig_Collision_Reaction_Func009Func001Func002Func005Func008C() ) ) {

						udg_Distance[ udg_LoopIndex ] = ( 10 * udg_Speed[ udg_LoopIndex ] );
						udg_Speed[ udg_LoopIndex ] = ( udg_Speed[ udg_LoopIndex ] * 0.75 );

					} else {

						udg_Distance[ udg_LoopIndex ] = ( udg_Distance[ udg_LoopIndex ] - ( udg_Distance[ udg_LoopIndex ] * ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) / 180 ) ) );

					}

					SetUnitManaBJ( udg_Missile[ udg_LoopIndex ], 0 )

				} else {

					udg_Angle[ udg_LoopIndex ] = ( 180 - udg_Angle[ udg_LoopIndex ] );
					udg_StartPoint[ udg_LoopIndex ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );

					if ( ( Trig_Collision_Reaction_Func009Func001Func002Func005Func003C() ) ) {

						udg_Distance[ udg_LoopIndex ] = ( 10 * udg_Speed[ udg_LoopIndex ] );
						udg_Speed[ udg_LoopIndex ] = ( udg_Speed[ udg_LoopIndex ] * 0.75 );

					} else {

						udg_Distance[ udg_LoopIndex ] = ( udg_Distance[ udg_LoopIndex ] - ( udg_Distance[ udg_LoopIndex ] * ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) / 180 ) ) );

					}

					SetUnitManaBJ( udg_Missile[ udg_LoopIndex ], 0 )
					udg_HasBounced[ udg_LoopIndex ] = true;

				}


			} else {

			null

			}

			EnumDestructablesInCircleBJ( 75, udg_TempPoint3, Trig_Collision_Reaction_Func009Func001Func003A )
			udg_TempGroup = GetUnitsInRangeOfLocMatching( 100, udg_TempPoint3, Condition( Trig_Collision_Reaction_Func009Func001Func004002003 ) );
			ForGroupBJ( udg_TempGroup, Trig_Collision_Reaction_Func009Func001Func005A )
			DestroyGroup( udg_TempGroup )
			RemoveLocation( udg_TempPoint3 )
			bj_forLoopAIndex = bj_forLoopAIndex + 1;

		}



	} else {

	null

	}


	if ( ( Trig_Collision_Reaction_Func010C() ) ) {

		udg_TempGroup = GetUnitsInRangeOfLocMatching( 175, udg_TempPoint2, Condition( Trig_Collision_Reaction_Func010Func001002003 ) );
		ForGroupBJ( udg_TempGroup, Trig_Collision_Reaction_Func010Func002A )
		DestroyGroup( udg_TempGroup )

	} else {

	null

	}


};


//===========================================================================
const InitTrig_Collision_Reaction = (): void => {

	gg_trg_Collision_Reaction = CreateTrigger();
	TriggerAddAction( gg_trg_Collision_Reaction, Trig_Collision_Reaction_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Collision_Reaction();
} );
